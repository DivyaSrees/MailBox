declare class MailsViewModel {
    folder: KnockoutObservable<MailApp.MailFolder>;
    mails: KnockoutObservableArray<MailApp.IMailData>;
    constructor(mailfolderData: MailApp.IMailFolderData);
}
export = MailsViewModel;
