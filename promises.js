const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// In promises we dont have to do anything with getPosts we can leave that.
// but for the  createPost() dont want to callback or we dont want to run callback.
// instead we will pas  promises.

// function createPost(post, callback){
//     setTimeout(()=> {
//         posts.push(post);
//         callback();// This call will help to run this particular code  after the waiting time of 2 second.
//     }, 2000);
// }

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;// if we set the error=true then this will give a Uncaught(in promise) Error.
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went Wrong");
      }
    }, 2000);
  });
}


// createPost({title: 'Post Three',body: 'This is Post three'})
// .then(getPosts);


//Async / Await

async function init(){
    await createPost({title: 'Post Three',body: 'This is Post three'});

    getPosts();
}

init();
// this is how  async await works.






// //promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
// setTimeout(resolve,2000, 'GoodBye')
// );
