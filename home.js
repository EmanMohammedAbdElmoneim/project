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
/*---------*/

/*quiz js*/
function check(){
    var question1 = document.quiz.ques1.value;
    var question2 = document.quiz.ques2.value;
    var question3 = document.quiz.ques3.value;
    var correct = 0;
    
    if (question1 == "Security professional"){
        correct++;
    }
    if (question2 == "Reconnaissance"){
        correct++;
    }
    if (question3 == "Remote attack"){
        correct++;
    }
    
    var messages =["Great Job" , "That is just Okay" , "You really need to do Better"];
    var pictures =["images/win.gif" , "images/meh.gif" , "images/lose.gif"];
    var range;
    
    if(correct <1){
        range=2;
    }
    if(correct >0 && correct <3){
       range=1;
    }
    if(correct == 3){
        range=0;
    }
    document.getElementById("after-submit").style.visibility="visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}
/*---------*/