
//  higher order function
function a(b){
    console.dir(b);
    b()
} 



function sayHI(){
    console.log("hiiiiiiiiiiiii");
}

// a(sayHI)


// Callback function
a(function(){
    console.log("Hello there")
})

