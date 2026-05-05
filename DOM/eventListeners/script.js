const h1 = document.querySelector('h1');
const container = document.querySelector(".container");
const addCardBtn = document.querySelector(".card");
const input = document.querySelector("input");
const form  = document.querySelector("form");

let count = 0;

addCardBtn.addEventListener('click',() =>{
    // const newCard = card.cloneNode(true);
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = count++;
    container.append(newCard);
})


// const intervalId = setInterval(()=>{
//     if(count>999){
//         clearInterval(intervalId);
//     }
//     addCardBtn.click();
// },10)

// window.addEventListener("keypress",()=>{
//     setTimeout(()=>{
//         input.focus();
//     },2000)
// })


// form.addEventListener("click",()=>{
//     setTimeout(() => {
//         input.textContent = "hello there"
//         console.log("form submitted");
//         form.submit();
//     }, 2000);
// })

