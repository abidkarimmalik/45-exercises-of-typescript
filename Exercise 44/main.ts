function MakeSandwith(...items:string[]){
    console.log("making a sandwitch with following items:\n");
    items.forEach(singleItem=> console.log(singleItem));
    console.log("\n Enjoy your sandwitch");
}

// Call the Function

MakeSandwith("chicken","cheese","kabab");

MakeSandwith("chicken","mayo");

MakeSandwith("bread","butter","chicken","egg","lettuce")