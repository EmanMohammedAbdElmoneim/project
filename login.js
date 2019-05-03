/*date js */
var d=new Date();
document.getElementById("demo").innerHTML=d;

/*navbar js*/
function toggleSlid()
{
    document.getElementById("toggle").classList.toggle("active");
}

function menu(){
    document.getElementById("drop").classList.toggle("down");    
}

function dropd2(){
    document.getElementById("drop2").classList.toggle("down2");
}

window.onclick=function(e){
    if(!e.target.matches('.aii')){
        var mydrop2= document.getElementById("drop");
        if ( mydrop2.classList.contains('down')){
            mydrop2.classList.remove('down');
        }
    }
}

/*log in js*/
let users=["emanmoh99@hotmail.com" , "emmymuhammed@gmail.com"];
let pass=["123" , "emmy"];
function logIn (){
    let user = document.getElementById("use").value;
    let pas=document.getElementById("pass").value;
    if(users.includes(user) && pass[users.indexOf(user)]==pas){
        window.location="home.html";
    }
    else {
        alert("your email or password arenot correct");
        document.getElementById("use").value=null;
        document.getElementById("pass").value=null;
    }
}
