import Mail = require('Mail/Mail');
import ko = require('knockout');
import IMail = require('Mail/IMail');

class MailViewModel {
    public id: KnockoutObservable<string>;
    public from: KnockoutObservable<string>;
    public to: KnockoutObservable<string>;
    public date: KnockoutObservable<Date>;
    public message: KnockoutObservable<Mail.MailMessage>;
    public folder: KnockoutObservable<IMail.MailFolder>;

    constructor(mail: IMail.IMailData) {
        this.from = ko.observable(mail.from);
        this.to = ko.observable(mail.to);
        this.date = ko.observable(mail.date);
        this.message = ko.observable(mail.message);
        this.folder = ko.observable(mail.folder);

    }
}
export = MailViewModel;
