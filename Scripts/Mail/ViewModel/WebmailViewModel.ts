import MailVM = require('Mail/ViewModel/MailViewModel');
import MailsVM = require('Mail/ViewModel/MailsViewModel');
import ko = require('knockout');
import sammy = require('sammy');
import IMail = require('Mail/IMail');

import EnumExtension = require('Common/EnumExtension');

    class WebmailViewModel {
        public chosenFolder: KnockoutObservable<string>;
        public chosenFolderData: KnockoutObservable<MailsVM>;
        public chosenMailData: KnockoutObservable<MailVM>;
        public folders: string[];
        constructor(){
            this.folders = EnumExtension.getNames(IMail.MailFolder);
           
            this.chosenFolder = ko.observable(this.folders[IMail.MailFolder.Inbox]);
            this.chosenFolderData = ko.observable<MailsVM>();
            this.chosenMailData = ko.observable<MailVM>();
            this.goToFolder(this.chosenFolder());

}
       

        
        public goToFolder(folder: string) {
           
            this.chosenFolder(folder);
            $.get('mail.json', (data) => this.chosenFolderData(data[folder]);
                    console.log(data[folder]));
            );
        
            //location.hash = folder.toString();
        }

        public goToMail(mail: IMail.IMailData) {
            location.hash = mail.folder + "/" + mail.id;
        }


    /*    public SammyApp: sammy.Application = 
        sammy().get('#.folder', context => {
            this.chosenFolder(context.params.folder);
            this.chosenMailData(null);
            $.get("http://learn.knockoutjs.com/mail", { folder: context.params.folder },
                this.chosenFolderData);

        }).get('#.folder/:mailId', context => {
            this.chosenFolder(context.params.folder);
            this.chosenFolderData(null);
            $.get("http://learn.knockoutjs.com/mail", { mailId: context.params.mailId },
                this.chosenMailData);

        }).get('http://learn.knockoutjs.com/mail', context => {
            context.app.Route('get', 'Inbox');
        }).run();
        */

    }
export = WebmailViewModel;