function show_magicians(magicians:string[]){
    magicians.forEach(name=> console.log(name));
}

function make_greatMagicians(magicians:string[]){
    return magicians.map(name=> `the great ${name}`);
}
//Array of magicians
let magicians_name=["abid","karim","fazal","imran"]

make_greatMagicians(magicians_name);


// make a copy of function through slice

let copy_magicians_names=magicians_name.slice()

let copy_great = make_greatMagicians(copy_magicians_names)

show_magicians(magicians_name);

show_magicians(copy_great);

