export declare class MailMessage implements MailApp.IMessage {
    subject: string;
    messageBody: string;
    constructor(subject: string, messageBody: string);
}
export declare class MailData implements MailApp.IMailData {
    id: string;
    from: string;
    to: string;
    date: Date;
    folder: MailApp.MailFolder;
    message: MailApp.IMessage;
    constructor(id: string, from: string, to: string, date: Date, folder: MailApp.MailFolder, message?: MailApp.IMessage);
}
