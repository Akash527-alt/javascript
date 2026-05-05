const img = document.querySelector("img")
const container = document.querySelector('.container')
const imgContainer = document.createElement("imgContainer");
const p = document.createElement("p");

document.querySelector('h1').innerText = "remove() vs removeChild()"





for(let i=0;i<100;i++){
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

   
    const paragraph = document.createElement("p");
    paragraph.innerText = i;

    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    imgContainer.append(img,paragraph);

    container.append(imgContainer);

}

const element = document.querySelector("body > div > div:nth-child(1)")

//  using .removeChild(element)m  -->  parent.removeChild(child);
// container.removeChild(element);

//  using .remove() method --> element.remove();
element.remove(); 
