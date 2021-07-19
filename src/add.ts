import fs from "fs";
import shell from "shelljs";
import chalk from "chalk";
import getPath from "./env";
import genCode from "./code";

const add = (pkgs: Array<string>) => {
    // Create the node_modules directory adn the package.json
    // if not created
    const pkgExists = fs.existsSync("package.json");
    if (!pkgExists) {
        shell.exec("npm init -y", { silent: true });
    }

    const node_modulesExists = fs.existsSync("node_modules");
    if (!node_modulesExists) {
        fs.mkdirSync("node_modules");
    }

    shell.cd("node_modules");
    const PWD = shell.pwd().stdout;
    // Create files in the node_modules folder
    // and link them to the package location
    pkgs.forEach((pkg: string) => {
        const p = getPath();
        const path = fs.existsSync(`${p}node_modules/${pkg}`);
        if (!path) {
            console.log(
                chalk.red(
                    `Package "${chalk.greenBright(
                        pkg
                    )}" is currently not installed !`
                )
            );
            console.log(chalk.red(`To install it, run :`));
            console.log(chalk.white(`     nlr install ${pkg}`));
            return;
        }

        // Link the package in the `node_modules` truck
        fs.writeFileSync(
            `${PWD}/${pkg}.js`,
            genCode(pkg, `${p}node_modules/${pkg}`)
        );
        console.log("Successfully added package :", pkg);
    });
};

export default add;
