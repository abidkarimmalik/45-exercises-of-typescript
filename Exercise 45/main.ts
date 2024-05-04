function mycarCreated (color:string,model:string,...options){
    let car = {
        color:color,
        model:model,
    };
    //add additional options
    
    options.forEach(option => {
        let [key,value]= option.split(":");
        car[key.trim()] = value.trim();
    })

    return car;

}

let mycar=mycarCreated("black","2024","manufacturer:suzuki","auto:True");
console.log(mycar);