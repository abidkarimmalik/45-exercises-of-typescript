function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_greatMagicians(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//Array of magicians
var magicians_name = ["abid", "karim", "fazal", "imran"];
make_greatMagicians(magicians_name);
// make a copy of function through slice
var copy_magicians_names = magicians_name.slice();
var copy_great = make_greatMagicians(copy_magicians_names);
show_magicians(magicians_name);
show_magicians(copy_great);
