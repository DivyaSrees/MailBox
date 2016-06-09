import IMail = require('Mail/IMail');

export class MailMessage implements IMail.IMessage {

    constructor(public subject: string,
        public messageBody: string) {

        this.subject = subject;
        this.messageBody = messageBody;
    }
}


export class MailData implements IMail.IMailData {

    constructor(public id: string,
        public from: string,
        public to: string,
        public date: Date,
        public folder: IMail.MailFolder,
        public message?: IMail.IMessage) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date;
        this.folder = folder;
        this.message = message;


    }

}

