import IMail = require('Mail/IMail');
declare class MailsViewModel {
    folder: IMail.MailFolder;
    mails: IMail.IMailData[];
    constructor(folder: IMail.MailFolder, mails: IMail.IMailData[]);
}
export = MailsViewModel;
