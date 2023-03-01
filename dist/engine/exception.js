"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["CONFIG_NOT_FOUND"] = "Paramater config not found";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
function stopExec(message) {
    console.error(message);
    process.exit(1);
}
exports.default = stopExec;
