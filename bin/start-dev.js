#!/usr/bin/env node

const concurrently = require('concurrently');

const COMMAND_DEV = 'yarn dev';

const workspaces = [
  '@mhsalves/poc-client-website-remote',
];

const WORKSPACE_COMMAND_FORMAT = (workspace) => `yarn workspace ${workspace} start`;

const commands = [
  COMMAND_DEV,
  ...workspaces.map(WORKSPACE_COMMAND_FORMAT),
];

function run() {
  try {
    concurrently(commands);
  } catch (ex) {
    console.error(ex);
    packagerProcess.kill();
    process.exit(1);
  }
  concurrently(commands);
}

module.exports = { run };