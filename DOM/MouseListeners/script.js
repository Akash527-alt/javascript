const h1 = document.querySelector('h1');
const container = document.querySelector(".container");
const card = document.querySelector(".card");

let i = 0;

// card.addEventListener('click',() =>{
//     // const newCard = card.cloneNode(true);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('mousedown',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('mouseup',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('mouseenter',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('mouseleave',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })



// card.addEventListener('mousemove',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('mouseover',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })



//  mouse events but no mouse added in front of them as mouseover

// card.addEventListener('wheel',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

// card.addEventListener('scroll',(e) =>{
//     console.log(e);
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.textContent = i++;
//     container.append(newCard);
// })

card.addEventListener('touchstart',(e) =>{
    console.log(e);
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = i++;
    container.append(newCard);
})