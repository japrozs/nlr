import getPath from "./env";
import fs from "fs";
import shell from "shelljs";
import chalk from "chalk";
import cfg from "./config";

const install = (pkg: string) => {
    const path = getPath();

    // Check if the .nlr folder exists
    const dirExists = fs.existsSync(path);
    if (!dirExists) {
        fs.mkdirSync(path);
    }

    const cfgExists = fs.existsSync(`${path}package.json`);
    if (!cfgExists) {
        fs.writeFileSync(`${path}package.json`, JSON.stringify(cfg));
    }

    // Enter that directory and install the package

    shell.cd(path);

    console.log(chalk.greenBright(`Installing package ${pkg} ...`));
    const out = shell.exec(`npm i ${pkg}`, { silent: true }).stdout;
    console.log(out);
    console.log(chalk.greenBright(`Successfully installed package ${pkg}`));
};

export default install;
