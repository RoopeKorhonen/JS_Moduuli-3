let number1 = parseInt(document.getElementById('#num1').value)
let number2 = parseInt(document.getElementById('#num2').value)
let operation = parseFloat(document.getElementById('#select').value)
let results = document.querySelector('#result')



if (operation = 'add') { // use + (addition) operator to add two numbers
    result = number1 + number2;

}
    else if (operation == 'sub') { // use -  (subtraction) operator to subtract two numbers
    result = number1 - number2;

}
    else if (operation == 'multi') { // use (multiplication) operator to multiply two numbers
    result = number1 * number2;

}
    else {
    result = number1 / number2; // use / (division) operator to divide two numbers

}let output = document.getElementById('result');
    output.value = result;


