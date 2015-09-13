(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.ISEVEN = mod.exports;
    }
})(this, function (exports, module) {
    "use strict";

    module.exports = isEven;

    function isEven(value) {
        return Math.floor(Math.abs(value)) & 1 ? false : true;
    }
});
