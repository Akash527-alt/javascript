const usernameInput = document.querySelector("#usernameInput")
const paragraph = document.querySelector("p");
const form = document.querySelector("form");

// usernameInput.addEventListener("click",()=>{
//     console.log("hello there..");
//     usernameInput.text="hello" 
// })

// usernameInput.addEventListener("dblclick",()=>{
//     console.log("double clicked event..");
//     usernameInput.text="hello" 
// })


// let inputValue ;

// usernameInput.addEventListener("input",(e)=>{
//     console.log(e.target.value);
//     // console.log("input fired");
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
    
// })

// usernameInput.addEventListener("change",(e)=>{
//     console.log(e.target.value);
//     // console.log("input fired");
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
    
// })

// usernameInput.addEventListener("focus",(e)=>{
//     console.log(e.target.value);
//     // console.log("input fired");
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
    
// })

// usernameInput.addEventListener("blur",(e)=>{
//     console.log(e.target.value);
//     // console.log("input fired");
//     inputValue = e.target.value;
//     paragraph.innerText = e.target.value;
    
// })


// form.addEventListener("click",(e)=>{
//     console.log(e);
// })

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);
})

