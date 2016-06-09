import MailVM = require('Mail/ViewModel/MailViewModel');
import MailsVM = require('Mail/ViewModel/MailsViewModel');
import sammy = require('sammy');
declare class WebmailViewModel {
    chosenFolder: KnockoutObservable<MailApp.MailFolder>;
    chosenFolderData: KnockoutObservable<MailsVM>;
    chosenMailData: KnockoutObservable<MailVM>;
    folders: string[];
    constructor(chosenFolder?: MailApp.MailFolder, chosenFolderData?: MailsVM, chosenMailData?: MailVM);
    goToFolder(folder: MailApp.MailFolder): void;
    goToMail(mail: MailApp.IMailData): void;
    SammyApp: sammy.Application;
}
export = WebmailViewModel;
