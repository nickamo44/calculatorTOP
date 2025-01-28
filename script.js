let num1;
let num2;
let operator;

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        let buttonContent = this.textContent;
        let displayContent = display.textContent;
        display.textContent = displayContent + buttonContent;
    })
});


function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(num1,num2,operator){
    if (operator == "+")
        return add(num1,num2);
    else if(operator == "-"){
        return subtract(num1,num2);
    }
    else if(operator == "*"){
        return multiply(num1,num2);
    }
    return divide(num1,num2);
}