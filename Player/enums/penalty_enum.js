"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.penalties = void 0;
var penalties;
(function (penalties) {
    penalties[penalties["minor"] = 2] = "minor";
    penalties[penalties["doubleminor"] = 4] = "doubleminor";
    penalties[penalties["major"] = 5] = "major";
    penalties[penalties["misconduct"] = 10] = "misconduct";
})(penalties = exports.penalties || (exports.penalties = {}));
