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

container.addEventListener('click',(e) =>{
    if(e.target !== container)
    e.target.remove();
})


