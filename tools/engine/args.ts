import { ArgumentParser } from "argparse";
import stopExec, { ErrorMessage } from "./exception";
import type { IStartDevArgs } from "./types";

function parseArgs(): IStartDevArgs {
  const parser = new ArgumentParser();

  parser.add_argument('-c', '--config', {
    help: 'set config file of modules to be loaded in dev mode',
    type: 'str',
  });

  return parser.parse_args();
}

function checkParams(args: IStartDevArgs) {
  if (!args.config) stopExec(ErrorMessage.CONFIG_NOT_FOUND);

  return true;
}

export { parseArgs, checkParams };
