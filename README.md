oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g antora-tools
$ antora-tools COMMAND
running command...
$ antora-tools (--version)
antora-tools/0.0.0 darwin-arm64 node-v18.17.0
$ antora-tools --help [COMMAND]
USAGE
  $ antora-tools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`antora-tools`](#antora-tools)
* [`antora-tools help [COMMANDS]`](#antora-tools-help-commands)
* [`antora-tools plugins`](#antora-tools-plugins)
* [`antora-tools plugins:install PLUGIN...`](#antora-tools-pluginsinstall-plugin)
* [`antora-tools plugins:inspect PLUGIN...`](#antora-tools-pluginsinspect-plugin)
* [`antora-tools plugins:install PLUGIN...`](#antora-tools-pluginsinstall-plugin-1)
* [`antora-tools plugins:link PLUGIN`](#antora-tools-pluginslink-plugin)
* [`antora-tools plugins:uninstall PLUGIN...`](#antora-tools-pluginsuninstall-plugin)
* [`antora-tools plugins:uninstall PLUGIN...`](#antora-tools-pluginsuninstall-plugin-1)
* [`antora-tools plugins:uninstall PLUGIN...`](#antora-tools-pluginsuninstall-plugin-2)
* [`antora-tools plugins update`](#antora-tools-plugins-update)
* [`antora-tools preview`](#antora-tools-preview)

## `antora-tools`

antora

```
USAGE
  $ antora-tools

DESCRIPTION
  antora

EXAMPLES
  antora example
```

_See code: [dist/commands/index.ts](https://github.com/tanapoln/antora-tools/blob/v0.0.0/dist/commands/index.ts)_

## `antora-tools help [COMMANDS]`

Display help for antora-tools.

```
USAGE
  $ antora-tools help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for antora-tools.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `antora-tools plugins`

List installed plugins.

```
USAGE
  $ antora-tools plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ antora-tools plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/index.ts)_

## `antora-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ antora-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ antora-tools plugins add

EXAMPLES
  $ antora-tools plugins:install myplugin 

  $ antora-tools plugins:install https://github.com/someuser/someplugin

  $ antora-tools plugins:install someuser/someplugin
```

## `antora-tools plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ antora-tools plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ antora-tools plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/inspect.ts)_

## `antora-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ antora-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ antora-tools plugins add

EXAMPLES
  $ antora-tools plugins:install myplugin 

  $ antora-tools plugins:install https://github.com/someuser/someplugin

  $ antora-tools plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/install.ts)_

## `antora-tools plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ antora-tools plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ antora-tools plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/link.ts)_

## `antora-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ antora-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ antora-tools plugins unlink
  $ antora-tools plugins remove
```

## `antora-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ antora-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ antora-tools plugins unlink
  $ antora-tools plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/uninstall.ts)_

## `antora-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ antora-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ antora-tools plugins unlink
  $ antora-tools plugins remove
```

## `antora-tools plugins update`

Update installed plugins.

```
USAGE
  $ antora-tools plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/update.ts)_

## `antora-tools preview`

Preview antora site

```
USAGE
  $ antora-tools preview

DESCRIPTION
  Preview antora site

EXAMPLES
  $ antora-tools preview
```

_See code: [dist/commands/preview/index.ts](https://github.com/tanapoln/antora-tools/blob/v0.0.0/dist/commands/preview/index.ts)_
<!-- commandsstop -->
