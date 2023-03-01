"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParams = exports.parseArgs = void 0;
const argparse_1 = require("argparse");
const exception_1 = __importStar(require("./exception"));
function parseArgs() {
    const parser = new argparse_1.ArgumentParser();
    parser.add_argument('-c', '--config', {
        help: 'set config file of modules to be loaded in dev mode',
        type: 'str',
    });
    return parser.parse_args();
}
exports.parseArgs = parseArgs;
function checkParams(args) {
    if (!args.config)
        (0, exception_1.default)(exception_1.ErrorMessage.CONFIG_NOT_FOUND);
    return true;
}
exports.checkParams = checkParams;
