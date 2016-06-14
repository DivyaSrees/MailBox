export = IMail;
declare module IMail {
    enum MailFolder {
        Inbox = 0,
        Archive = 1,
        Sent = 2,
        Spam = 3,
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
