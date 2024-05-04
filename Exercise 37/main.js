"use strict";
//make function
function make_shirt(size = "Large", printmessage = "I LOVE TYPESCRIPT") {
    console.log(`MAKE A ${size} shirt with ${printmessage} message on it
    `);
}
//calling function
make_shirt();
make_shirt("medium");
//calling a function with small size with diffrent message
make_shirt("small", "I LOVE JAVA SCRIPT");
