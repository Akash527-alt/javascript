// const img = document.querySelector("img")
const container = document.querySelector('.container')

// const imgContainer = document.createElement("imgContainer");
// const p = document.createElement("p");
// const img = document.createElement("img");

for(let i=0;i<100;i++){
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

   
    const paragraph = document.createElement("p");
    paragraph.innerText = i;

    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    imgContainer.append(img,paragraph);

    container.append(imgContainer);


    /** 
    //  const myHTML = `<div class="img-container">
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
    //         <p>${i}</p>
    //     </div>`

    // imgContainer.innerHTML = myHTML;

    */

}



// for(let i=1;i<=100;i++){
//     const p = document.createElement("p");
//     setTimeout(() => {
//         const img = document.createElement("img");
//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(img);
//     container.append(p.innerHTML = i);
//     console.log(i);
//     }, i * 100);
    
// }



// const p = document.createElement("p")    // --> create p tag

// p.innerText = "hello there...."     // set text to p tag
// p.classList.add("para");            // add class para 
// p.id="para"                         // added id to p tag
// container.append(p);                 // append p tag to container class element



// for(let i=2;i<100;i++){
//    const newImg = img.cloneNode();
//    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//    container.append(newImg);
// }


