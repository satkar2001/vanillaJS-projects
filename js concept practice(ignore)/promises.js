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

// createPost({title:'post three',body:'this is post three'})
//  .then(getPosts)
//  .catch(err=>console.log(err));

const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'goodbye'));
//time for all promises will be the time provided as the latest
const promise4=fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4])
 .then(values=>console.log(values));

