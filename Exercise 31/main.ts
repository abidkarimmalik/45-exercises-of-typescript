//Created User Names Array
let userNames=["admin","abid","zahid","adeel"];
userNames=[]
if(userNames.length===0){
    console.log("You need to find some users")
}
else{
    userNames.forEach(oneuser=>{
        if(oneuser==="admin"){
            console.log(`Hello ${oneuser},"would you like to see a status report"`)
        }else{
            console.log(`"Hello" ${oneuser} "Thank You For Logging in again"`)
        }
    })
}