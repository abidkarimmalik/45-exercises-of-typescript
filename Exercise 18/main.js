var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["france", "china", "america", "india"];
console.log("original:", countriesToVisit);
// prinring orinal order in lphabetical order
console.log("alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in original order", countriesToVisit);
// print in reverse order
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse);
console.log("still in original order", countriesToVisit);
console.log("original array reversed:", countriesToVisit.reverse());
console.log("back to original order:", countriesToVisit.reverse());
console.log("sorted in alphabetical  order:", countriesToVisit.sort);
console.log("original array reversed again:", countriesToVisit.reverse());
