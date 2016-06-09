define(["require", "exports", 'knockout', 'sammy', 'Common/EnumExtension'], function (require, exports, ko, sammy, EnumExtension) {
    "use strict";
    var WebmailViewModel = (function () {
        function WebmailViewModel(chosenFolder, chosenFolderData, chosenMailData) {
            var _this = this;
            this.folders = EnumExtension.getNames(MailApp.MailFolder);
            this.SammyApp = sammy().get('#.folder', function (context) {
                _this.chosenFolder(context.params.folder);
                _this.chosenMailData(null);
                $.get("/mail", { folder: context.params.folder }, _this.chosenFolderData);
            }).get('#.folder/:mailId', function (context) {
                _this.chosenFolder(context.params.folder);
                _this.chosenFolderData(null);
                $.get("/mail", { mailId: context.params.mailId }, _this.chosenMailData);
            }).get('', function (context) {
                context.app.Route('get', 'Inbox');
            }).run();
            this.chosenFolder = ko.observable(chosenFolder);
            this.chosenFolderData = ko.observable(chosenFolderData);
            this.chosenMailData = ko.observable(chosenMailData);
        }
        WebmailViewModel.prototype.goToFolder = function (folder) {
            location.hash = folder.toString();
        };
        WebmailViewModel.prototype.goToMail = function (mail) {
            location.hash = mail.folder + "/" + mail.id;
        };
        return WebmailViewModel;
    }());
    return WebmailViewModel;
});
//# sourceMappingURL=WebmailViewModel.js.map