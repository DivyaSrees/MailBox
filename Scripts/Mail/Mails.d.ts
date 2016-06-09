declare class MailFolderData implements MailApp.IMailFolderData {
    folder: MailApp.MailFolder;
    mails: Array<MailApp.IMailData>;
    constructor(folder: MailApp.MailFolder, mails: Array<MailApp.IMailData>);
}
export = MailFolderData;
