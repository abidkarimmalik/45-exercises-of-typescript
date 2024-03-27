var gueslist = ["hamza", "amir", "zahid", "afzal"];
var dontcome = gueslist[0];
console.log(dontcome, "ni aa sakta");
gueslist.splice(0, 1, "adeel"),
    gueslist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinner with me?")); });
