"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const shelljs_1 = __importDefault(require("shelljs"));
const chalk_1 = __importDefault(require("chalk"));
const env_1 = __importDefault(require("./env"));
const code_1 = __importDefault(require("./code"));
const add = (pkgs) => {
    const pkgExists = fs_1.default.existsSync("package.json");
    if (!pkgExists) {
        shelljs_1.default.exec("npm init -y", { silent: true });
    }
    const node_modulesExists = fs_1.default.existsSync("node_modules");
    if (!node_modulesExists) {
        fs_1.default.mkdirSync("node_modules");
    }
    shelljs_1.default.cd("node_modules");
    const PWD = shelljs_1.default.pwd().stdout;
    pkgs.forEach((pkg) => {
        const p = env_1.default();
        const path = fs_1.default.existsSync(`${p}node_modules/${pkg}`);
        if (!path) {
            console.log(chalk_1.default.red(`Package "${chalk_1.default.greenBright(pkg)}" is currently not installed !`));
            console.log(chalk_1.default.red(`To install it, run :`));
            console.log(chalk_1.default.white(`     nlr install ${pkg}`));
            return;
        }
        fs_1.default.writeFileSync(`${PWD}/${pkg}.js`, code_1.default(pkg, `${p}node_modules/${pkg}`));
        console.log("Successfully added package :", pkg);
    });
};
exports.default = add;
//# sourceMappingURL=add.js.map