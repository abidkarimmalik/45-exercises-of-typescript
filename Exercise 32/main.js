//Create User_name
var Current_users = ["usman", "imran", "adeel", "hassan"];
var New_users = ["zahid", "naseer", "mudassir", "hassan"];
New_users.forEach(function (new_one_user) {
    var our_condition = Current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is not available"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is avalaible"));
    }
});
