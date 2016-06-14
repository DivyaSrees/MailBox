require.config({
    baseUrl: "../Scripts",
    paths: {
        "jquery": "jquery-2.2.3",
        "knockout": "knockout-3.4.0",
        "text": "text",
        "sammy": "sammy-0.7.5"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "sammy": {
            deps: ["jquery"],
            exports: "sammy"
        }
    }
});
require(["Main"]);
//# sourceMappingURL=requireConfig.js.map