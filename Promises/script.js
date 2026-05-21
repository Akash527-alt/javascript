const resolveBtn = document.querySelector(".resolve-btn");
const rejectBtn = document.querySelector(".reject-btn");

const p = new Promise((resolve,reject) =>{
    resolveBtn.addEventListener('click',()=>{
        resolve('Promise Resolved');
    });

    rejectBtn.addEventListener('click',()=>{
        reject('Promise rejected');
    })
});

p.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err); 
})
