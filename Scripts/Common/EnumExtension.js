define(["require", "exports"], function (require, exports) {
    "use strict";
    var EnumExtension = (function () {
        function EnumExtension() {
        }
        EnumExtension.getNamesAndValues = function (e) {
            return this.getNames(e).map(function (n) { return { name: n, value: e[n] }; });
        };
        EnumExtension.getNames = function (e) {
            return this.getObjValues(e).filter(function (v) { return typeof v === "string"; });
        };
        EnumExtension.getValues = function (e) {
            return this.getObjValues(e).filter(function (v) { return typeof v === "number"; });
        };
        EnumExtension.getObjValues = function (e) {
            return Object.keys(e).map(function (k) { return e[k]; });
        };
        return EnumExtension;
    }());
    return EnumExtension;
});
//# sourceMappingURL=EnumExtension.js.map