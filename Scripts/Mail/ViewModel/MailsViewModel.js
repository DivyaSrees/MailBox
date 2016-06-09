define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    var MailsViewModel = (function () {
        function MailsViewModel(mailfolderData) {
            this.folder = ko.observable(mailfolderData.folder);
            this.mails = ko.observableArray(mailfolderData.mails);
        }
        return MailsViewModel;
    }());
    return MailsViewModel;
});
