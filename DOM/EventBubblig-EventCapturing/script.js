const green = document.querySelector(".green")
const pink = document.querySelector(".pink")
const blue = document.querySelector(".blue")

// document.addEventListener("click",()=>{
//     console.log("Document Event Listener");
// },{capture:false});
// document.body.addEventListener("click",()=>{
//     console.log("Body Event Listener");
// },{capture:false});
// green.addEventListener("click",()=>{
//     console.log("Green Event Listener");
// },{capture:false});

// pink.addEventListener("click",()=>{
//     console.log("Pink Event Listener");
// },{capture:false});

blue.addEventListener("click",(e)=>{
    console.log("Blue Event Listener");
},{capture:false,once:true});