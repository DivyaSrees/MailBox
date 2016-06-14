define(["require", "exports"], function (require, exports) {
    "use strict";
    var IMail;
    (function (IMail) {
        (function (MailFolder) {
            MailFolder[MailFolder["Inbox"] = 0] = "Inbox";
            MailFolder[MailFolder["Archive"] = 1] = "Archive";
            MailFolder[MailFolder["Sent"] = 2] = "Sent";
            MailFolder[MailFolder["Spam"] = 3] = "Spam";
        })(IMail.MailFolder || (IMail.MailFolder = {}));
        var MailFolder = IMail.MailFolder;
    })(IMail || (IMail = {}));
    return IMail;
});
//# sourceMappingURL=IMail.js.map