"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const fs_1 = __importDefault(require("fs"));
const shelljs_1 = __importDefault(require("shelljs"));
const chalk_1 = __importDefault(require("chalk"));
const config_1 = __importDefault(require("./config"));
const install = (pkg) => {
    const path = env_1.default();
    const dirExists = fs_1.default.existsSync(path);
    if (!dirExists) {
        fs_1.default.mkdirSync(path);
    }
    const cfgExists = fs_1.default.existsSync(`${path}package.json`);
    if (!cfgExists) {
        fs_1.default.writeFileSync(`${path}package.json`, JSON.stringify(config_1.default));
    }
    shelljs_1.default.cd(path);
    console.log(chalk_1.default.greenBright(`Installing package ${pkg} ...`));
    const out = shelljs_1.default.exec(`npm i ${pkg}`, { silent: true }).stdout;
    console.log(out);
    console.log(chalk_1.default.greenBright(`Successfully installed package ${pkg}`));
};
exports.default = install;
//# sourceMappingURL=installer.js.map