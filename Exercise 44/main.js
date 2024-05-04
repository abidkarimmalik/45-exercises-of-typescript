function MakeSandwith() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwitch with following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Enjoy your sandwitch");
}
// Call the Function
MakeSandwith("chicken", "cheese", "kabab");
MakeSandwith("chicken", "mayo");
MakeSandwith("bread", "butter", "chicken", "egg", "lettuce");
