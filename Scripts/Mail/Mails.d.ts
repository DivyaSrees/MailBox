import IMail = require('Mail/IMail');
declare class MailFolderData implements IMail.IMailFolderData {
    folder: IMail.MailFolder;
    mails: Array<IMail.IMailData>;
    constructor(folder: IMail.MailFolder, mails: Array<IMail.IMailData>);
}
export = MailFolderData;
