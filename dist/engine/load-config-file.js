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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const exception_1 = __importDefault(require("./exception"));
/**
 * This flag search config file in this project if development.
 * In production should be the path of module which use this CLI.
 * */
const isDev = process.env.NODE_ENV === 'development';
const getBasePath = () => {
    const backPath = isDev ? '/../..' : '/../../../../..';
    return `${__dirname}${backPath}`;
};
function loadConfigFile(fileName) {
    const filePath = `${getBasePath()}/${fileName}`;
    try {
        const config = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(config);
        if (!json.engineConfig || !json.engineConfig.modules) {
            throw new Error(`${fileName} does not in correctly format`);
        }
        ;
        return json.engineConfig;
    }
    catch (error) {
        const err = error;
        (0, exception_1.default)(err);
    }
}
exports.default = loadConfigFile;
