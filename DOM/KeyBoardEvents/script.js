const h1 = document.querySelector("h1");
const input = document.querySelector("input")

// h1.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })

// window.addEventListener("keypress",(e)=>{
//     console.log("code :",e.code);
//     console.log("key: ",e.key)
// })



window.addEventListener("keyup",(e)=>{
    console.log("key-up")
    console.log("code :",e.code);
    console.log("key: ",e.key)
})
window.addEventListener("keydown",(e)=>{
    console.log("keydowndd")
    console.log("code :",e.code);
    console.log("key: ",e.key)
})