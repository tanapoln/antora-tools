import { Command } from "@oclif/core";
import * as fs from "node:fs";
import * as httpServer from "http-server";
import * as YAML from "yaml";
// @ts-ignore
import * as buildPlaybook from "@antora/playbook-builder";
// @ts-ignore
import * as userRequire from "@antora/user-require-helper";
// @ts-ignore
import * as generateSite from "@antora/site-generator";
import * as lodash from "lodash";

const playbookTemplate = {
  site: {
    title: "Antora preview",
    url: "http://localhost:8080",
    // start_page: "docmodulename::index.adoc",
  },
  content: {
    edit_url: null,
    sources: [
      {
        url: "..",
        start_path: "../docs",
      },
    ],
  },
  ui: {
    bundle: {
      url: "https://s3.ap-southeast-1.amazonaws.com/static3.wndv.co/lmwn-asset/antora-ui/ui-bundle.zip",
    },
  },
  output: {
    clean: true,
    dir: "./tmp/public",
  },
};

export default class Preview extends Command {
  static description = "Preview antora site";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  static args = {};

  async writeAntoraPlaybook(cwd: string, tmpdir: string): Promise<void> {
    playbookTemplate.content.sources[0].url = cwd;
    playbookTemplate.content.sources[0].start_path = "docs";
    playbookTemplate.output.dir = tmpdir + "/public";

    const yamlDoc = YAML.stringify(playbookTemplate);
    const targetFile = tmpdir + "/antora-playbook.yml";
    fs.writeFileSync(targetFile, yamlDoc);

    console.log(`Antora playbook is written to ${targetFile}`);
  }

  async buildAntoraPlaybook(cwd: string, tmpdir: string): Promise<void> {
    const playbookFile = `${tmpdir}/antora-playbook.yml`;

    // const userRequireContext = { dot: tmpdir, paths: [tmpdir, cwd] };
    // let generatorPath: any, generator: any;

    const playbook = buildPlaybook(
      `--playbook ${playbookFile}`,
      process.env,
      buildPlaybook.defaultSchema
    );

    // this.log(`generatorPath: ${generatorPath}`)
    // const {default: generateSite} = await import(generatorPath)
    // await generateSite.call(playbook)
    await generateSite(playbook);
  }

  async serveHttp(tmpdir: string, portNumber: number): Promise<void> {
    const server = httpServer.createServer({
      root: tmpdir + "/public",
      cache: -1,
    });
    server.listen(portNumber, "0.0.0.0", () => {
      this.log("Http listen at :8080");
    });
  }

  async run(): Promise<void> {
    const cwd = fs.realpathSync(".");
    const tmpPath = cwd + "/tmp";
    fs.mkdirSync(tmpPath, { recursive: true });

    await this.writeAntoraPlaybook(cwd, tmpPath);
    await this.buildAntoraPlaybook(cwd, tmpPath);


    const buildFn = lodash.debounce(async (evt, name) => {
        this.log(`File ${name} is ${evt}`);
        await this.buildAntoraPlaybook(cwd, tmpPath);
    }, 500)

    fs.watch(".", { recursive: true }, (evt, name) => {
      if (name?.startsWith("tmp/")) {
        return;
      }
      
      buildFn(evt, name)
    });

    this.serveHttp(tmpPath, 8080);
  }
}
