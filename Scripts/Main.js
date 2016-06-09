define(["require", "exports", 'knockout', "Mail/ViewModel/WebmailViewModel"], function (require, exports, ko, WebmailViewModel) {
    "use strict";
    require(["jquery"], function ($) {
        $(document).ready(function () {
            //Instantiate page view model
            ko.applyBindings(new WebmailViewModel());
        });
    });
});
//# sourceMappingURL=Main.js.map