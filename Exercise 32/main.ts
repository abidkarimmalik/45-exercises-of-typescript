//Create User_name

let Current_users=["usman","imran","adeel","hassan"];
let New_users=["zahid","naseer","mudassir","hassan"]
New_users.forEach(new_one_user=>{
    let our_condition=Current_users.some(current_one_user=>current_one_user.toLowerCase()===new_one_user.toLowerCase())
    if(our_condition){
        console.log(`sorry ${new_one_user} is not available`)
    }else{
        console.log(`this username ${new_one_user} is avalaible`)
    }
})
