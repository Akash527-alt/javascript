// const fruitColleciton = ['apple','banana','carry','mango']

// fruitColleciton.push("sitafal")
// console.log(fruitColleciton.length)
// console.log(fruitColleciton)


// const nums = [0,2,4,6,8,10]



//  Deep copy vs Shallow Copy

// const user1 = "Akash";
// let user2 = user1

// user2 = "akash"


const fruits = ['apple','banana','mango']
// const myfruits = fruits

// myfruits.push("dates")

// const myfruits = [...fruits] 
// const myfruits = [].concat(fruits)
const myfruits = fruits.slice()


const user1 = {
    firstName : "Akash",
    lastName: "Kumar",
    address:{
        city:"mumbai",
        state : "Maharashatra"
    },
    subjects : ["math","physics","biology"]
}

// Shallow Copy -> Address and subjects will still be same (changing in user2 can change in user1 for address and subjects)
const user2 = {...user1}










