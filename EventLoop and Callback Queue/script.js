console.log("Program started..")
function hello(){
    console.log("hello World...")
}

setTimeout(hello,1000);
setTimeout(hello,2000);
setTimeout(function(){
    console.log("Hello there....")
},3000);

for(let i = 0;i<2;i++){
    console.log(`Hii -  ${i}` )
}

console.log(`program end.`)