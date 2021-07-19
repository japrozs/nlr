import process from "process";

const getOS = () => {
    const OS = process.platform;

    if (OS == "win32") {
        return "windows";
    } else {
        return OS;
    }
};

const getPath = () => {
    // Return the path where a new package has to be installed
    const OS = getOS();
    const HOME = process.env.HOME;
    let PATH = "";
    if (OS == "windows") {
        PATH = `${HOME}/.nlr/`;
    } else {
        PATH = `${HOME}/.nlr/`;
    }

    return PATH;
};

export default getPath;
