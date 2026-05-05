// const fruits = ["apple","banana",'cherry','date']

// for(const fruit of fruits){
//     console.log(fruit);
// }

const user = {
    name : "Akash",
    age : 10,
    lastName : "prajapati",
    eyecolor : "black"
}

// for(let key in user){
//     console.log(key,user[key])
// }

// console.log(" ***********888888****")

// for(let val of user){      // raises error
//     console.log(val)
// }

const userKeys = Object.keys(user);
const userValues = Object.values(user);
const keySet = Object.entries(user);

// for(let key of userKeys){
//     console.log(key);
// }

// console.log(" ***************")

// for(let val of userValues){
//     console.log(val)
// }

// console.log(keySet);


// for(let val of keySet){
//     console.log(val)
// }

