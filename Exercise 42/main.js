function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_greatMagicians(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//Array of magicians
var magicians_name = ["abid", "karim", "fazal", "imran"];
make_greatMagicians(magicians_name);
var greatMagicians = make_greatMagicians(magicians_name);
console.log(greatMagicians);
