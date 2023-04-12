
let code1 = 'admin.secure@rode.com';
let code2 = 'bat';
let code3 = 'mat';


var one = false;
var two = false;
var three = false;


function setUp(){
    

    if(one == 'true'){
        updateElement('input1','btn1','txt1');
    }

    if(two == 'true'){
        updateElement('input2','btn2','txt2');
    }

    if(three == 'true'){
        updateElement('input3','btn3','txt3');
    }
    
    if(four == 'true'){
        updateElement('input4','btn4','txt4');
    }
}

function test(){
    document.getElementById('input1').style.border = '3px solid #ff0000';
}


function return1(){
   
   // if(one === 'false'){
        var input = document.getElementById('input1').value;
        if(input == code1){
            updateElement('input1','btn1','txt1');
            one = true;
            checkComplete();
        }
   // }

}


function return2(){
   
   // if(two === 'false'){
        var input = document.getElementById('input2').value;
        if(input == code2){
            updateElement('input2','btn2','txt2');
            two = true;
            checkComplete();
        }
   // }

}

function return3(){

   // if(three === 'false'){
        var input = document.getElementById('input3').value;
        if(input == code3){
            updateElement('input3','btn3','txt3');
            three = true;
            checkComplete();
        }
   // }

}




function updateElement(form, button, text){
    document.getElementById(form).style.border = '3px solid #ff0000';
    document.getElementById(form).style.color = '#ff0000';
    document.getElementById(button).style.border = '3px solid #ff0000'
    document.getElementById(button).style.color = '#ff0000'
    document.getElementById(text).style.color ='#ff0000'
}

function checkComplete(){
    console.log('called');
    if(one === true && two === true && three === true){
        window.location.replace("final.html");
        console.log('working');
    }
}