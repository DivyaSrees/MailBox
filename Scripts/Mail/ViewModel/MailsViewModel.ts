import ko = require('knockout');
import IMail = require('Mail/IMail');


class MailsViewModel {
    constructor( public folder: IMail.MailFolder,
                public mails: IMail.IMailData[]){
}
}export = MailsViewModel
