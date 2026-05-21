const button = document.querySelector("button");    
const popup = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-icon");

button.addEventListener("click" , (e) =>{
    popup.classList.add("popup-open");
})


closeButton.addEventListener("click",(e)=>{
    popup.classList.remove("popup-open");
}) 

overlay.addEventListener('click',(e)=>{
    popup.classList.remove("popup-open");
})

