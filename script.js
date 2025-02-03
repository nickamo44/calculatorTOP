let num1;
let num2;
let operator;
let previousAnswer = 0;
let previousCalcCounter = 0;
let arithmeticCounter = 0;

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");
let equalsButton = document.getElementById("equals");
let clearButton = document.getElementById("clear");
let arithmetic = document.querySelectorAll(".arithmetic");
let changeSigns = document.getElementById("changeSigns");
let deleteButton = document.getElementById("delete");
let decimalButton = document.getElementById("decimal");
let array = [];
let string = "";
let defaultText = "0";
display.textContent = defaultText;

equalsButton.addEventListener("click", () => {
    array = string.split(/([+\-x/=])/);
    console.table(array);
    if (array[0] == "" && array[1] == "-" && array[4]== "" && array.length == 7){
        display.content = "";
        num1 = (parseFloat(array[2])*-1);
        num2 = (parseFloat(array[6])*-1);
        operator = array[3];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
    else if (array[0] == "" && array[1] == "-" && array[4]== ""){
        display.content = "";
        num1 = (parseFloat(array[2])*-1);
        num2 = num1;
        operator = array[3];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
    else if (array[0] == "" && array[1] == "-" && array.length>4){
        display.content = "";
        num1 = (parseFloat(array[2])*-1);
        num2 = parseFloat(array[4]);
        operator = array[3];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
    else if (array.length ==5 && array[3] == "-"){
        display.content ="";
        num1 = (parseFloat(array[0]));
        num2 = parseFloat(array[4]*-1);
        operator = array[1];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
    if (array[2] == '' && array.length !==5){
        display.textContent = "";
        array[2] = array[0];
        num1 = parseFloat(array[0]);
        num2 = parseFloat(array[2]);
        operator = array[1];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
    else if(array[2] !=='' && array.length == 3 && array[0] !== ""){
        display.textContent = "";
        num1 = parseFloat(array[0]);
        num2 = parseFloat(array[2]);
        operator = array[1];
        display.textContent = operate(num1,num2,operator);
        string = "";
    }
});

arithmetic.forEach(symbol =>{
    symbol.addEventListener("click", function(){
        array = string.split(/([+\-x/])/);
        if (arithmeticCounter ==1 &&
            (string.slice(-1) == "+" ||
            string.slice(-1) == "-" ||
            string.slice(-1) == "x" ||
            string.slice(-1) == "/")){
            string = string.slice(0,-1);
            arithmeticCounter -= 1;
        }
        else if (arithmeticCounter == 1 && array[0] == "" && array[1] == "-" && array[4]== "" && array.length == 7){
            display.content = "";
            num1 = (parseFloat(array[2])*-1);
            num2 = (parseFloat(array[6])*-1);
            operator = array[3];
            display.textContent = operate(num1,num2,operator);
            string = "";
        }
        else if (arithmeticCounter ==1 && array.length ==5 && array[3] == "-"){
            display.content ="";
            num1 = (parseFloat(array[0]));
            num2 = parseFloat(array[4]*-1);
            operator = array[1];
            display.textContent = operate(num1,num2,operator);
            string = "";
            console.log("test");
        }
        else if(arithmeticCounter ==1 &&
            array.length ==5 &&
            array[0] == "" &&
            array[1] == "-"){
            display.content = "";
            num1 = (parseFloat(array[2])*-1);
            num2 = parseFloat(array[4]);
            operator = array[3];
            display.textContent = operate(num1,num2,operator);
            string = "";
        }
        else if(arithmeticCounter ==1 && array.length ==5){
            display.content ="";
            num1 = (parseFloat(array[0])*-1);
            num2 = parseFloat(array[4]);
            operator = array[1];
            display.textContent = operate(num1,num2,operator);
            string = "";
        }
        else if (arithmeticCounter ==1){
            console.table(array);
            num1 = parseFloat(array[0]);
            num2 = parseFloat(array[2]);
            operator = array[1];
            display.textContent = operate(num1,num2,operator);
        }
        if (previousCalcCounter == 1){
            previousCalcCounter -=1;
            string = previousAnswer;
            let mathSymbol = symbol.textContent;
            string = string + mathSymbol;
            arithmeticCounter +=1;
        }
        else {
            arithmeticCounter +=1;
            let mathSymbol = symbol.textContent;
            string = string + mathSymbol;
        }
        if (arithmeticCounter ==1 && string.length == 1){
            string ="";
            display.textContent = "0";
            arithmeticCounter -=1;
        }
        console.log(string);
    })
})

clearButton.addEventListener("click", () =>{
    display.textContent = defaultText;
    string = "";
    arithmeticCounter = 0;
});

deleteButton.addEventListener("click", ()=>{
    if (string !== "0"){
       string = string.slice(0,-1);
       display.textContent = string;
       console.log(string);
    }
    if (previousCalcCounter ==1){
        let lastString = previousAnswer.toString();
        string = lastString.slice(0,-1);
        display.textContent = string;
        console.log(string);
        previousCalcCounter -=1;
    }
    if (string == ""){
        display.textContent = "0";
    }
});

decimalButton.addEventListener("click", ()=>{
    if (string.slice(-1) == "+" ||
    string.slice(-1) == "-" ||
    string.slice(-1) == "x" ||
    string.slice(-1) == "/"){
        display.textContent = "0.";
        string += ".";
        console.log("test");
    }
    if (!display.textContent.includes(".")
     && previousCalcCounter !== 1){
        string = string + ".";
        let decimalString = display.textContent + ".";
        display.textContent = decimalString;
        console.log(string);
    }
    else if (previousCalcCounter == 1){
        string = "0.";
        display.textContent = "0.";
        previousCalcCounter -=1;
    }
});

changeSigns.addEventListener("click", ()=> {
    let currentNum = display.textContent;
    parseFloat(currentNum);
    array = string.split(/([+\-x/=])/);
    console.table(array);
    if (currentNum >0){
        if (array.length <2){
        display.textContent = "";
        display.textContent ="-"+currentNum;
        string = display.textContent;
        }
        else if(array.length == 3){
            array[2] = "-";
            array[3] = currentNum;
            string = array.toString();
            string = string.replaceAll(",","");
            display.textContent ="-"+currentNum;
        }
        else if(array.length ==5){
            array[4] = "-";
            array[5] = currentNum;
            string = array.toString();
            string = string.replaceAll(",","");
            display.textContent ="-"+currentNum;
        }
    }
    else{
        if (array.length <=3 &&
            array.length !== 1
        ){
            display.textContent = array[2];
            string = display.textContent;
            console.log(string);
            console.log("poo");
        }
        else if (array.length ==5){
            array.splice(3,1);
            display.textContent = array[3];
            string = array.toString();
            string = string.replaceAll(",","");
        }
        if (array.length ==1){
            let newString = previousAnswer.toString();
            string = newString.slice(1);
            display.textContent = string;
            previousCalcCounter -=1;
        }
    }
    console.log(string);
});

buttons.forEach(button => {
    button.addEventListener("click", function(){
    if(display.textContent[0]=="0" && display.textContent[1] !== "."){
        display.textContent = "";
    }
    if (previousCalcCounter == 1){
        display.textContent =""
        previousCalcCounter -=1;
        string = "";
    }
    if (string.charAt(string.length-1) === "+" ||
        string.charAt(string.length-1) === "-" ||
        string.charAt(string.length-1) === "x" ||
        string.charAt(string.length-1) === "/"){
        display.textContent = "";
    }
    let buttonContent = button.textContent;
    string = string + buttonContent;
    console.log(string);
    let displayContent = display.textContent;
    display.textContent = displayContent + buttonContent;
    })
});



function add(num1,num2){
    return Math.round((num1 + num2)*100)/100;
}

function subtract(num1,num2){
    return  Math.round((num1 - num2)*100)/100;
}

function multiply(num1,num2){
    return  Math.round((num1 * num2)*100)/100;
}

function divide(num1,num2){
    if (num2 == 0){
        return "dumbass";
    }
    else{
    return  Math.round((num1 / num2)*100)/100;
    }
}

function operate(num1,num2,operator){
    if (operator == "+"){
        arithmeticCounter -=1;
        previousCalcCounter +=1;
        previousAnswer = num1 + num2;
        return add(num1,num2);
    }
    else if(operator == "-"){
        arithmeticCounter -=1;
        previousCalcCounter +=1;
        previousAnswer = num1 - num2;
        return subtract(num1,num2);
    }
    else if(operator == "x"){
        arithmeticCounter -=1;
        previousCalcCounter +=1;
        previousAnswer = num1 * num2;
        return multiply(num1,num2);
    }
    else {
        previousCalcCounter +=1;
        arithmeticCounter -=1;
        previousAnswer = num1 / num2;
        return divide(num1,num2);
    }
}
