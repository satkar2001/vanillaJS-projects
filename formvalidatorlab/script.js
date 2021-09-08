const username = document.getElementById('name');
const usernamev = document.getElementById('name').value;
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('conpass');
const button=document.getElementById('button')

function checkname(){

    if (isNaN(usernamev) && usernamev.length<=8) {
     username.style.backgroundColor="blue";
}
}




button.addEventListener('click', function(e)
{
 e.preventDefault();
 checkname();
});
