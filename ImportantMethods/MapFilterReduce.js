const fruits = ["apple","banana",'cherry','date']

// .map() => map() creates a new array by applying a function to each element of the original array.

// const fruitsCapital = fruits.map((val, index,arr)=>{
//     console.log(index,val);
//     return val.toUpperCase();
// })

// console.log(fruits.map((val, index,arr)=>{  
//     console.log(index,val);
//     return val.toUpperCase();
// }))


// .filter() => filter() creates a new array containing only elements that satisfy a condition.

// const months = ['January','February','March','April','May','December']

// const filteredMonths = months.filter((val,index,arr) =>{
//     console.log(index,val);
//     return val.toLowerCase().includes('m');
// });

// const students = [
//     {
//         name:'Akash',
//         age:19,
//     },
//     {
//         name:'Adharsh',
//         age:18,
//     },
//     {
//         name:'kash',
//         age:90,
//     },
//     {
//         name:'ash',
//         age:16,
//     },
//     {
//         name:'tanvi',
//         age:9,
//     }
// ]

// const adults = students.filter((student,index,students)=>{
//     return student.age>= 18;
// }).map((val) =>{
//     return val.name;
// }).filter((name) =>{
//     return name.toUpperCase().startsWith("A");
// })



//  Filter() -> 

// const nums = [0,1,2,3,4,5]

// nums.reduce((accumulator,current) =>{
//     console.log(accumulator,current);
//     return accumulator + current;
// },0)


const evenNums = [0,2,4,6,8,10]

console.log(evenNums.some((num) =>{
    return num> 10;
}))