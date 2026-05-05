
//  Destructuring 
const colors = ['pink', 'red', 'gree', 'blue', 'yellow', 'white']


const [color1 ,color2,color3] = colors;

const {3:color4} = colors;

const user = {
    name: "Akash",
    age: 19, address: { city: "mumbai", state: "jharkhan" }
}


const {name:username,age:umar}  = user;

const {address :{city} } = user;
 








// Rest Operator

// function add(...nums){
//     return nums.reduce((acc,current) => acc + current);
// }

// const nums = [1,3,4,5,6,7,8,9]

// const result = add(...nums);



//  Spread Operator (...)

/*
const arr = [1,3,4,5,6]
const newArr = [...arr]
const Arr = [...newArr,...arr]

function sum(...nums){
    let sum = 0;
    for(let i= 0;i<nums.length;i++){
        sum += nums[i];
    }

    return sum;
}

console.log(sum(...Arr))


const user = {
    name :"Akash",
    age : 19
}

const newUser = {...user,city:"mumbai"}
*/



//  Default Parameter

/** 
function multiply(a=10,b=10){
    return a*b; 
}

function rollADice(sides= 6){
    return Math.floor(Math.random() * sides) + 1;
}
    */