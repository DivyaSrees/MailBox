import IMail = require('Mail/IMail');

class MailFolderData implements IMail.IMailFolderData {
    constructor(public folder: IMail.MailFolder,
        public mails: Array<IMail.IMailData>) {
        this.folder = folder;
        this.mails = mails;
    }
}
export = MailFolderData;