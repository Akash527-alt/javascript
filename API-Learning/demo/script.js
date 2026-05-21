const img = document.querySelector("img");
const button = document.querySelector(".button")


button.addEventListener('click',(e)=>{

    /*
    fetch("https://dog.ceo/api/breeds/image/random").then(
        response => response.json())
        .then(data =>{
            console.log(data);
            img.src = data.message
        }
    );
    */
    
    img.style.display = "block";
    const xhr = new XMLHttpRequest();


    // xhr.addEventListener('load',(e)=>{
    //     img.src = xhr.response.message;
    //     console.log(xhr );
    // })

    xhr.onload = ()=>{
        img.src = xhr.response.message;
        console.log(xhr );
    };


    xhr.open('GET',`https://dog.ceo/api/breeds/image/random`);

    xhr.responseType = 'json'

   



    xhr.send();


    
})


  