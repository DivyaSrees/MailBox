define(["require", "exports", 'knockout', 'Mail/IMail', 'Common/EnumExtension'], function (require, exports, ko, IMail, EnumExtension) {
    "use strict";
    var WebmailViewModel = (function () {
        function WebmailViewModel() {
            this.folders = EnumExtension.getNames(IMail.MailFolder);
            this.chosenFolder = ko.observable(this.folders[IMail.MailFolder.Inbox]);
            this.chosenFolderData = ko.observable();
            this.chosenMailData = ko.observable();
            this.goToFolder(this.chosenFolder());
        }
        WebmailViewModel.prototype.goToFolder = function (folder) {
            var _this = this;
            console.log(folder);
            this.chosenFolder(folder);
            $.get('mail.json', function (data) { return _this.chosenFolderData(data[folder]); });
            //location.hash = folder.toString();
        };
        WebmailViewModel.prototype.goToMail = function (mail) {
            location.hash = mail.folder + "/" + mail.id;
        };
        return WebmailViewModel;
    }());
    return WebmailViewModel;
});
//# sourceMappingURL=WebmailViewModel.js.map