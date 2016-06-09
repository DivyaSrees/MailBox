define(["require", "exports"], function (require, exports) {
    "use strict";
    var IMail;
    (function (IMail) {
        (function (MailFolder) {
            MailFolder[MailFolder["Inbox"] = 0] = "Inbox";
            MailFolder[MailFolder["Sent"] = 1] = "Sent";
            MailFolder[MailFolder["Deleted"] = 2] = "Deleted";
            MailFolder[MailFolder["Draft"] = 3] = "Draft";
            MailFolder[MailFolder["Junk"] = 4] = "Junk";
        })(IMail.MailFolder || (IMail.MailFolder = {}));
        var MailFolder = IMail.MailFolder;
    })(IMail || (IMail = {}));
    return IMail;
});
