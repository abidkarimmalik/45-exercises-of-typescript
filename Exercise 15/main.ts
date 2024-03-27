let gueslist = ["hamza","amir","zahid","afzal"]

let  dontcome = gueslist[0]

console.log(dontcome,"ni aa sakta");

gueslist.splice(0, 1,"adeel"),
gueslist.forEach(guest => console.log(`salam ${guest},would you like to dinner with me?`));
