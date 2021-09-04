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

function createPost(post){
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         posts.push(post);
         const error=false;
         if(!error){
             resolve();
         }
         else{
             reject('Error: something went wrong');
         }
     },2000);
 });
}

createPost({title:'post three',body:'this is post three'})
 .then(getPosts)
 .catch(err=>console.log(err));