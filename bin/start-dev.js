#!/usr/bin/env node

const fs = require("fs");
const { ArgumentParser } = require('argparse');
const concurrently = require('concurrently');

const COMMAND_DEV = 'yarn dev';

const WORKSPACE_COMMAND_FORMAT = (workspace) => `yarn workspace ${workspace} start`;

function parseArgs() {
  const parser = new ArgumentParser();

  parser.add_argument('-c', '--config', {
    help: 'set config file of modules to be loaded in dev mode',
    type: 'str',
  });

  return parser.parse_args();
}

function stopExec() {
  process.exit(1);
}

function checkParams(args) {
  if (!args.config) stopExec();

  return true;
}

function loadConfigFile(fileName) {
  const basePath = `${__dirname}/..`;
  const filePath = `${basePath}/${fileName}`;

  try {
    const config = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(config);

    if (!json.engineConfig || !json.engineConfig.modules) {
      throw new Error(`${fileName} does not in correctly format`);
    };

    return json.engineConfig;
  } catch (error) {
    console.error(error);
    stopExec();
  }
}

function run(args) {
  checkParams(args);

  const { modules } = loadConfigFile(args.config);

  const commands = [
    COMMAND_DEV,
    ...modules.map(WORKSPACE_COMMAND_FORMAT),
  ];

  const { result } = concurrently(commands);
  result
    .then(a => console.log(a))
    .catch(e => console.error(e));
}

run(parseArgs());
