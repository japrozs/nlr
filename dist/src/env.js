"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const getOS = () => {
    const OS = process_1.default.platform;
    if (OS == "win32") {
        return "windows";
    }
    else {
        return OS;
    }
};
const getPath = () => {
    const OS = getOS();
    const HOME = process_1.default.env.HOME;
    let PATH = "";
    if (OS == "windows") {
        PATH = `${HOME}/.nlr/`;
    }
    else {
        PATH = `${HOME}/.nlr/`;
    }
    return PATH;
};
exports.default = getPath;
//# sourceMappingURL=env.js.map