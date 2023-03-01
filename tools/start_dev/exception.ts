export enum ErrorMessage {
  CONFIG_NOT_FOUND='Paramater config not found',
}

function stopExec(message: ErrorMessage | Error) {
  console.error(message);
  process.exit(1);
}

export default stopExec;
