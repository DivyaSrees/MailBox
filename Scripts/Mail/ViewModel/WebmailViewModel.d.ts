import MailVM = require('Mail/ViewModel/MailViewModel');
import MailsVM = require('Mail/ViewModel/MailsViewModel');
import IMail = require('Mail/IMail');
declare class WebmailViewModel {
    chosenFolder: KnockoutObservable<string>;
    chosenFolderData: KnockoutObservable<MailsVM>;
    chosenMailData: KnockoutObservable<MailVM>;
    folders: string[];
    constructor();
    goToFolder(folder: string): void;
    goToMail(mail: IMail.IMailData): void;
}
export = WebmailViewModel;
