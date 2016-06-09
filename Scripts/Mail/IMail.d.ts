declare module MailApp {
    enum MailFolder {
        Inbox = 0,
        Sent = 1,
        Deleted = 2,
        Draft = 3,
        Junk = 4,
    }
    interface IMailData {
        id: string;
        from: string;
        to: string;
        date: Date;
        folder: MailFolder;
        message: IMessage;
    }
    interface IMessage {
        subject: string;
        messageBody: string;
    }
    interface IMailFolderData {
        folder: MailFolder;
        mails: Array<IMailData>;
    }
}
