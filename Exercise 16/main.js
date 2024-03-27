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
