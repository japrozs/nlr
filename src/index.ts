#!/usr/bin/env node
import { program } from "commander";
import { version, description } from "../package.json";
import process from "process";
import install from "./installer";
import add from "./add";

program.version(version).description(description);

program
    .command("install <pkg>")
    .alias("i")
    .description("Install a package globally")
    .action((pkg: string) => {
        install(pkg);
    });

program
    .command("add [pkgs...]")
    .alias("a")
    .description("Initialize a project in the `node_modules` folder")
    .action((pkg) => {
        if (pkg.length == 0) {
            console.log("Error: missing required argument 'pkgs'");
        }
        add(pkg);
    });

program.parse(process.argv);
