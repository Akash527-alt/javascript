
// async function makeRequest(){
//     throw 'reject promise'      // to rejecta  promise -> throw an error
// }


// to throw an error in js
/**
 *  two ways -> 
 *  1) ->    throw "error"  
 *  2) ->    throw new Error(" error ")
 * 
 */



async function makeRequest() {
    const url = "https://dummyjson.com/users?delay=3000";
    const responsePromise = await (await fetch(url)).json();
    console.log(responsePromise);
    // const data = await responsePromise.json();
    // console.log(data);
}

makeRequest()
