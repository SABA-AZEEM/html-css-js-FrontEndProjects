//get elements from dom
const hrEl=document.getElementById("hr");
const minEl=document.getElementById("min");
const secEl=document.getElementById("sec");
const msEl=document.getElementById("ms");
const startBtn=document.getElementById("start");
const stopBtn=document.getElementById("stop");
const resetBtn=document.getElementById("reset");
//var
var hr=0;
var min=0;
var sec=0;
var ms=0;
var timer=false;
//start function
const start=()=>{
    timer=true;
    stopWatch();
}
//stop function
const stop=()=>{
    timer=false;
}
//reset function
const reset=()=>{
    timer=false;
    hr=0;
    min=0;
    sec=0;
    ms=0;
        msEl.textContent="00";
        secEl.textContent="00";
        minEl.textContent="00";
        hrEl.textContent="00";
}
//main function
const stopWatch=()=>{
    if(timer){
        ms=++ms;
        if(ms===100){
            ms=0;
            sec +=1;
        }

        if(sec===60){
            sec=0;
            min += 1;
        }

        if(min===60){
            min=0;
            sec=0;
            hr +=1;
        }
        let hrStr=hr,minStr=min,secStr=sec,msStr=ms;
        if(hr<10){
            hrStr="0"+hr;
        }
        if(min<10){
            minStr="0"+min;
        }
        if(sec<10){
            secStr="0"+sec;
        }
        if(ms<10){
            msStr="0"+ms;
        }
        msEl.textContent=msStr;
        secEl.textContent=secStr;
        minEl.textContent=minStr;
        hrEl.textContent=hrStr;
        setTimeout("stopWatch()",10);
    }
}