define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    var MailViewModel = (function () {
        function MailViewModel(mail) {
            this.from = ko.observable(mail.from);
            this.to = ko.observable(mail.to);
            this.date = ko.observable(mail.date);
            this.message = ko.observable(mail.message);
            this.folder = ko.observable(mail.folder);
        }
        return MailViewModel;
    }());
    return MailViewModel;
});
