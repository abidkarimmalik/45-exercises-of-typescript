function show_magicians(magicians:string[]){
    magicians.forEach(name=> console.log(name));
}

function make_greatMagicians(magicians:string[]){
    return magicians.map(name=> `the great ${name}`);
}
//Array of magicians
let magicians_name=["abid","karim","fazal","imran"]

make_greatMagicians(magicians_name);


let greatMagicians=make_greatMagicians(magicians_name);

console.log(greatMagicians);