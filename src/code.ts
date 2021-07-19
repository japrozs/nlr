const genCode = (name: string, pkg: string) => {
    return `const ${name} = require("${pkg}");\nmodule.exports = ${name}`;
};

export default genCode;
