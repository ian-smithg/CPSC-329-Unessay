
let code1 = 'cat';
let code2 = 'bat';
let code3 = 'mat';
let code4 = 'tat';



function setUp(){
    var one = localStorage.getItem('in1');
    var two = localStorage.getItem('in2');
    var three = localStorage.getItem('in3');
    var four = localStorage.getItem('in4');
    
    if(one !== 'true' && two !== 'true' && three !== 'true' && four !== 'true'){
        localStorage.setItem('in1','false');
        localStorage.setItem('in2','false');
        localStorage.setItem('in3','false');
        localStorage.setItem('in4','false');
    }

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
   
    var one = localStorage.getItem('in1');
   // if(one === 'false'){
        var input = document.getElementById('input1').value;
        if(input == code1){
            updateElement('input1','btn1','txt1');
            //localStorage.setItem('in1', 'true');
        }
   // }

}


function return2(){
   
    var two = localStorage.getItem('in2');
   // if(two === 'false'){
        var input = document.getElementById('input2').value;
        if(input == code2){
            updateElement('input2','btn2','txt2');
        }
   // }

}

function return3(){

    var three = localStorage.getItem('in3');
   // if(three === 'false'){
        var input = document.getElementById('input3').value;
        if(input == code3){
            updateElement('input3','btn3','txt3');
        }
   // }

}

function return4(){
    var four = localStorage.getItem('in4');
   // if(four === 'false'){
        var input = document.getElementById('input4').value;
        if(input == code4){
            updateElement('input4','btn4','txt4');
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