"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKSPACE_COMMAND_FORMAT = exports.COMMAND_DEV = void 0;
exports.COMMAND_DEV = 'yarn dev';
const WORKSPACE_COMMAND_FORMAT = (workspace) => `yarn workspace ${workspace} start`;
exports.WORKSPACE_COMMAND_FORMAT = WORKSPACE_COMMAND_FORMAT;
