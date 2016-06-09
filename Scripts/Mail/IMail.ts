export = IMail;

module IMail {

    export enum MailFolder {

        Inbox,
        Sent,
        Deleted,
        Draft,
        Junk

    }

     export interface IMailData {
        id:string
        from: string;
        to: string;
        date: Date;
        folder: MailFolder;
        message: IMessage;
    }


     export interface IMessage {
        subject: string;
        messageBody: string;
       // attachment: Object; 

    }
     export interface IMailFolderData {
        folder: MailFolder;
        mails: Array<IMailData>;

    }
}