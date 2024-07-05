"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("@persistance/table");
const getTableInteractor = () => {
    // logic with params
    // logic with db
    const tables = (0, table_1.getTables)();
    return tables;
};
exports.default = getTableInteractor;
