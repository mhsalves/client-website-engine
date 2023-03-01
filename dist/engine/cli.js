"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const concurrently_1 = __importDefault(require("concurrently"));
const args_1 = require("./args");
const constants_1 = require("./constants");
const load_config_file_1 = __importDefault(require("./load-config-file"));
function run(args) {
    (0, args_1.checkParams)(args);
    const { modules } = (0, load_config_file_1.default)(args.config);
    const commands = [
        constants_1.COMMAND_DEV,
        ...modules.map(constants_1.WORKSPACE_COMMAND_FORMAT),
    ];
    const { result } = (0, concurrently_1.default)(commands);
    result
        .then(a => console.log(a))
        .catch(e => console.error(e));
}
exports.run = run;
