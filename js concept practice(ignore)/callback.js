const posts=[
    {title:'1st post' ,body:'this is the first one to be called'},
    {title:'2nd post', body:'this is the second one to be called'}
];


function getPosts(){
    setTimeout(()=>{
     let output='';
    posts.forEach((post,index)=>{
     output+=`<li>${post.title}</li>`
    });
    document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    },2000)
}

createPost({title:'3rd post', body:'this is the third one to be called'},getPosts)
