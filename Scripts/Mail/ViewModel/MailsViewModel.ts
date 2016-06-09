import mails = require('Mail/Mails');
import ko = require('knockout');
import IMail = require('Mail/IMail');

class MailsViewModel {
    public folder: KnockoutObservable<IMail.MailFolder>;
    public mails: KnockoutObservableArray<IMail.IMailData>;

    constructor(mailfolderData: IMail.IMailFolderData) {

        this.folder = ko.observable(mailfolderData.folder);
        this.mails = ko.observableArray(mailfolderData.mails);
    }
}
export = MailsViewModel;