import ko = require('knockout');
import WebmailViewModel = require("Mail/ViewModel/WebmailViewModel");

require(["jquery"], function ($) {
    $(document).ready(function () {

        //Instantiate page view model
        ko.applyBindings(new WebmailViewModel());
    });
});