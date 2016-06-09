import Mail = require('Mail/Mail');
declare class MailViewModel {
    id: KnockoutObservable<string>;
    from: KnockoutObservable<string>;
    to: KnockoutObservable<string>;
    date: KnockoutObservable<Date>;
    message: KnockoutObservable<Mail.MailMessage>;
    folder: KnockoutObservable<MailApp.MailFolder>;
    constructor(mail: MailApp.IMailData);
}
export = MailViewModel;
