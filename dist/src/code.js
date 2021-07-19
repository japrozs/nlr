"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genCode = (name, pkg) => {
    return `const ${name} = require("${pkg}");\nmodule.exports = ${name}`;
};
exports.default = genCode;
//# sourceMappingURL=code.js.map