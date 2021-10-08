const posts=[
{title:'Post One', body:'This is Post One'},
{title:'Post Two', body:'This is Post Two'}
];

function getPosts(){
setTimeout(()=> {
    let output ='';
    posts.forEach((post, index)=>{
        output +=`<li>${post.title}</li>`;
    } );  
    document.body.innerHTML= output;

    }, 1000);

}

function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post);
        callback();// This call will help to run this particular code  after the waiting time of 2 second.
    }, 2000);
}

getPosts();


createPost({title:'Post Three', body:'This is Post Three'}, getPosts);

// when you first run this program after creating 
//new fuction i.e Create Post this will show the same output as earlier.
// This is because the create fuction is taking more time then the getPosts fuction.
// So this will not print the Post Three after execution.
// Now  here comes the async JS.