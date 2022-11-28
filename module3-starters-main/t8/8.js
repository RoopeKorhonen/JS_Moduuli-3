'use strict';

function calc(){
    let x = document.getElementById("operation").value;
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

if (x == 'add') {
    let calculation = parseInt(number1) + parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'sub') {
    let calculation = parseInt(number1) - parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'multi') {
    let calculation = parseInt(number1) * parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'div') {
    let calculation = parseInt(number1) / parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

}

const button = document.querySelector('button');

button.onclick = calc;

