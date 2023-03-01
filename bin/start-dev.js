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

console.log(commands);

const { result } = concurrently(commands);
result
  .then(a => console.log(a))
  .catch(e => console.error(e));

console.log('ddd');