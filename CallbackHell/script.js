
function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        });

        xhr.addEventListener('error', () => {
            reject("promise rejected")
        });
    })

    xhr.open(method, url);
    xhr.send();

    return promise;
}


makeHttpRequest('GET',"https://dummyjson.com/users")
.then((userData) => makeHttpRequest("GET",`https://dummyjson.com/posts/user/${userData.users[1].id}`))
.then((postData) => makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postData.posts[1].id}`)).
then((commentData)=>`https://dummyjson.com/users${commentData.comments[0].user.id}` )
.then((userData)=> console.log(userData))
.catch((err) => console.log(err));