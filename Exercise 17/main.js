// creating array
var guestlist = ["hamza", "umar", "arfa", "ali"];
// jo ni aa sakty
var dontCome = guestlist[0];
console.log("dontCome", "ni aa saktay hen");
// add/remove guests from array
guestlist.splice(0, 1, "adeel");
// message
console.log("Good News !  we have found bigger table");
// adding new guest on start of array
guestlist.unshift("ali");
// adding new guest on end of array
guestlist.push("imran");
//  getting guest in middle of array
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "fazal");
console.log("updated list of guest");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to have a dinner with me?")); });
console.log("sorry guys i can invite only two people as new dinner table is not intime");
// using while loop to remove guest from array until only 2 guests left
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, " i cant invite you on dinner"));
}
console.log("Invitation to last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, " you are still invited on dinner")); });
// removing last 2 guests from array
guestlist.pop();
guestlist.pop();
console.log("emptylist", guestlist);
