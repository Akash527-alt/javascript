// confirm("press ok to continue");
// prompt("hello there") 


 // Literals Object - Tradition way

const user = {
    "firstName": 'Akash',
    lastName: 'Prajapat',
    age: 19,
    greet: function () {
        console.log(`Hello ${this.firstName}`)
    },
    address: {
        city: "mumbai",
        pinCode: 1992,
        state: "Maharashatra",
        isCurrentAddress: true,
        sendParcel: function () {
            console.log(`parcel sent to the address ${this.city}`)
        }

    }
}

user.greet()
user.address.sendParcel()



//  using new Object()
/** 

const person = new Object();

person.name = "Akash";
person.age = 19;
person.job = new Object();
person.job.salary=100000;

const j = person.job;
j.department = "IT";

console.log(person)
*/

//  constructor function
/**
function person(...){
  
}

const p1 = new person("Akash",19);
const p2= new person("kumar",19);

console.log(p1)

*/

// using Object.create()
/** 
const personProto = {
  greet() {
    console.log("Hello!");
  }
};


const person = Object.create(personProto);
person.name = "Akash";


person.greet();
*/


//  using ES6 classes (modern way)
/** 
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("hello there")
    }
}


*/