import IMail = require('Mail/IMail');
export declare class MailMessage implements IMail.IMessage {
    subject: string;
    messageBody: string;
    constructor(subject: string, messageBody: string);
}
export declare class MailData implements IMail.IMailData {
    id: string;
    from: string;
    to: string;
    date: Date;
    folder: IMail.MailFolder;
    message: IMail.IMessage;
    constructor(id: string, from: string, to: string, date: Date, folder: IMail.MailFolder, message?: IMail.IMessage);
}
