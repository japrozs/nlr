#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = require("../package.json");
const process_1 = __importDefault(require("process"));
const installer_1 = __importDefault(require("./installer"));
const add_1 = __importDefault(require("./add"));
commander_1.program.version(package_json_1.version).description(package_json_1.description);
commander_1.program
    .command("install <pkg>")
    .alias("i")
    .description("Install a package globally")
    .action((pkg) => {
    installer_1.default(pkg);
});
commander_1.program
    .command("add [pkgs...]")
    .alias("a")
    .description("Initialize a project in the `node_modules` folder")
    .action((pkg) => {
    if (pkg.length == 0) {
        console.log("Error: missing required argument 'pkgs'");
    }
    add_1.default(pkg);
});
commander_1.program.parse(process_1.default.argv);
//# sourceMappingURL=index.js.map