//  Arrow function

const square = (a)=>{
    return  a**2;
}

const sq = (a)=> a**2;
console.log(sq(4))


//  single pareameter
const s = z => z * z;

//  more than one parameters -> two ways
const sum = (a,b) =>{
    return a + b;
}

const sub = (a,b) => a-b;


//  no parameters 
const greet = () => console.log("hello There.....");