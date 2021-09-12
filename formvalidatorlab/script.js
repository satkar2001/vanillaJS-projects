var username = document.getElementById('name');
var password = document.getElementById('pass');
var passwordv = document.getElementById('pass').value;

var password2 = document.getElementById('conpass');

var email = document.getElementById('email');



var button=document.getElementById('button');

var pas=document.getElementById('pas');
var cpass=document.getElementById('cpass');
var em=document.getElementById('em');
var nm=document.getElementById('nm');

var pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{16,}$/;
var eregex =/(?=.*[@])/;


function checkname(){

    if (username.value==null || username.value.length<8) {
        alert('atleast 8 characters required');
        username.style.backgroundColor="#ffb8b7";
    }
    else{
        username.style.backgroundColor="#ddfba4";
    }
}

function checkpassword(){
    if (password.value==null) {
        password.style.backgroundColor="#ffb8b7";
    }
    else {
        password.style.backgroundColor="#ddfba4";
        pas.innerHTML="weak";
       if(password.value.match(pregex)){
        pas.innerHTML="Strong";
       }
    }

}

function checkconfirm(){

    if (password2.value!=password.value) {
        password2.style.backgroundColor="#ffb8b7";
        nm.innerHTML="Passwords are not the same";
    }
    else{
        password2.style.backgroundColor="#ddfba4";
    }
}

function checkemail(){

    if (email.value.match(eregex)) {
        email.style.backgroundColor="#ddfba4";
    }
    else{
        email.style.backgroundColor="#ffb8b7";
        em.innerHTML="Mail is wrong";
    }
}



button.addEventListener('click', function(e)
{
 e.preventDefault();
 checkname();
 checkpassword();
 checkconfirm();
 checkemail();
});
