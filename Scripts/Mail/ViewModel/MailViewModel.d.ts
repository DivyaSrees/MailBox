import Mail = require('Mail/Mail');
import IMail = require('Mail/IMail');
declare class MailViewModel {
    id: KnockoutObservable<string>;
    from: KnockoutObservable<string>;
    to: KnockoutObservable<string>;
    date: KnockoutObservable<Date>;
    message: KnockoutObservable<Mail.MailMessage>;
    folder: KnockoutObservable<IMail.MailFolder>;
    constructor(mail: IMail.IMailData);
}
export = MailViewModel;
