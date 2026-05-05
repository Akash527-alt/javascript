const nameElement = document.querySelector(".name-tag"); 
const nameInput= document.querySelector(".name");
const ageElement = document.querySelector(".age-tag"); 
const ageInput= document.querySelector(".age");


// nameElement.innerText = localStorage.myName;
// nameElement.innerText = localStorage.getItem("myName");


// nameInput.addEventListener("input" , (e) =>{
//     localStorage.setItem("myName",e.target.value);
//     nameElement.innerText = localStorage.getItem("myName");
// })

// ageElement.innerText = localStorage.getItem("age");

// ageInput.addEventListener("input" , (e) =>{
//     localStorage.setItem("age",e.target.value);
//     ageElement.innerText = localStorage.getItem("age");
// })



const myData = JSON.parse(localStorage.getItem("myData")) || {}

nameElement.innerText = myData.name || "";
ageElement.innerText = myData.age || "";

nameInput.addEventListener('input',(e)=>{
    myData.name = e.target.value;
    localStorage.setItem("myData",JSON.stringify(myData));
    nameElement.innerText = JSON.parse(localStorage.myData).name;
})

ageInput.addEventListener("input",(e)=>{
    myData.age = e.target.value;
    localStorage.setItem("myData",JSON.stringify(myData));
    ageElement.innerText = JSON.parse(localStorage.myData).age;
})