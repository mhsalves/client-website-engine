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

concurrently(commands);
