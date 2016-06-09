import MailVM = require('Mail/ViewModel/MailViewModel');
import MailsVM = require('Mail/ViewModel/MailsViewModel');
import ko = require('knockout');
import sammy = require('sammy');
import IMail = require('Mail/IMail');

import EnumExtension = require('Common/EnumExtension');

    class WebmailViewModel {
        public chosenFolder: KnockoutObservable<IMail.MailFolder>;
        public chosenFolderData: KnockoutObservable<MailsVM>;
        public chosenMailData: KnockoutObservable<MailVM>;

        public folders: string[] = EnumExtension.getNames(IMail.MailFolder);

        constructor(chosenFolder?: IMail.MailFolder,
            chosenFolderData?: MailsVM,
            chosenMailData?: MailVM) {
            this.chosenFolder = ko.observable(chosenFolder);
            this.chosenFolderData = ko.observable(chosenFolderData);
            this.chosenMailData = ko.observable(chosenMailData);
        }

        goToFolder(folder: IMail.MailFolder) {
            location.hash = folder.toString();
        }

        goToMail(mail: IMail.IMailData) {
            location.hash = mail.folder + "/" + mail.id;
        }


        public SammyApp: sammy.Application =
        sammy().get('#.folder', context => {
            this.chosenFolder(context.params.folder);
            this.chosenMailData(null);
            $.get("/mail", { folder: context.params.folder },
                this.chosenFolderData);

        }).get('#.folder/:mailId', context => {
            this.chosenFolder(context.params.folder);
            this.chosenFolderData(null);
            $.get("/mail", { mailId: context.params.mailId },
                this.chosenMailData);

        }).get('', context => {
            context.app.Route('get', 'Inbox');
        }).run();


    }
export = WebmailViewModel;