import * as fs from 'fs';

import stopExec from "./exception";

/**
 * This flag search config file in this project if development.
 * In production should be the path of module which use this CLI.
 * */
const isDev = process.env.NODE_ENV === 'development';

const getBasePath = () => {
  const backPath = isDev ? '/../..' : '/../../../../..';
  return `${__dirname}${backPath}`;
}

function loadConfigFile(fileName: string) {
  const filePath = `${getBasePath()}/${fileName}`;

  try {
    const config = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(config);

    if (!json.engineConfig || !json.engineConfig.modules) {
      throw new Error(`${fileName} does not in correctly format`);
    };

    return json.engineConfig;
  } catch (error) {
    const err = error as Error;
    stopExec(err);
  }
}

export default loadConfigFile;
