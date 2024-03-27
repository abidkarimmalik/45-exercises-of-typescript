let countriesToVisit : string[] = ["france","china","america","india"];

console.log("original:", countriesToVisit);
// prinring orinal order in lphabetical order
console.log("alphabetical order:", [...countriesToVisit].sort())

console.log("still in original order", countriesToVisit)
// print in reverse order
console.log("reverse order:",[...countriesToVisit].reverse)

console.log("still in original order", countriesToVisit)

console.log("original array reversed:", countriesToVisit.reverse());

console.log("back to original order:",countriesToVisit.reverse());

console.log("sorted in alphabetical  order:", countriesToVisit.sort);

console.log("original array reversed again:", countriesToVisit.reverse());

