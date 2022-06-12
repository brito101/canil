"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let obj = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false,
    };
    if (activeMenu !== "") {
        obj[activeMenu] = true;
    }
    return obj;
};
exports.createMenuObject = createMenuObject;
