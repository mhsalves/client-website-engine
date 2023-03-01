import concurrently from 'concurrently';

import { checkParams } from "./args";
import { COMMAND_DEV, WORKSPACE_COMMAND_FORMAT } from './constants';
import loadConfigFile from "./load-config-file";
import type { IStartDevArgs } from './types';

function run(args: IStartDevArgs) {
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

export { run };
