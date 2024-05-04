//Created User Names Array
var userNames = ["admin", "abid", "zahid", "adeel"];
userNames = [];
if (userNames.length === 0) {
    console.log("You need to find some users");
}
else {
    userNames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("Hello ".concat(oneuser, ",\"would you like to see a status report\""));
        }
        else {
            console.log("\"Hello\" ".concat(oneuser, " \"Thank You For Logging in again\""));
        }
    });
}
