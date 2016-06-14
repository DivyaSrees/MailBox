define(["require", "exports"], function (require, exports) {
    "use strict";
    var MailMessage = (function () {
        function MailMessage(subject, messageBody) {
            this.subject = subject;
            this.messageBody = messageBody;
            this.subject = subject;
            this.messageBody = messageBody;
        }
        return MailMessage;
    }());
    exports.MailMessage = MailMessage;
    var MailData = (function () {
        function MailData(id, from, to, date, folder, message) {
            this.id = id;
            this.from = from;
            this.to = to;
            this.date = date;
            this.folder = folder;
            this.message = message;
            this.id = id;
            this.from = from;
            this.to = to;
            this.date = date;
            this.folder = folder;
            this.message = message;
        }
        return MailData;
    }());
    exports.MailData = MailData;
});
//# sourceMappingURL=Mail.js.map