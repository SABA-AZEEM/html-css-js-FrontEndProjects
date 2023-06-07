//get element from dom
const celsiusEl=document.getElementById("celsius");
const fahrenheitEl=document.getElementById("fahrenheit");
//function for celsius to fahrenheit
function celFun(event){
    const inputVal=event.target.value;
    const fahVal=(inputVal*9/5)+32;
    if(!Number.isInteger(fahVal)){
        fahrenheitEl.value=fahVal.toFixed(4);
    }
    fahrenheitEl.value=fahVal;
}
//function for fahrenheit to celsius
function fahFun(event){
    const inputVal=event.target.value;
    const celVal=(inputVal-32)*5/9;
    if(!Number.isInteger(celVal)){
        celsiusEl.value=celVal.toFixed(4);
    }
    celsiusEl.value=celVal;
}