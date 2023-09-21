import {Args, Command, Flags} from '@oclif/core'

export default class MainCommand extends Command {
  static description = 'antora'

  static examples = [
    `antora example`,
  ]

  static flags = {
    // from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  static args = {
    // person: Args.string({description: 'Person to say hello to', required: true}),
  }

  async run(): Promise<void> {
    // const {args, flags} = await this.parse(Hello)

    this.log(`Usage: antora-tools preview`)
  }
}
