const counterEl=document.querySelector(".counter");
const loadingBarFrontEl=document.querySelector(".loading-bar-front");
let idx=0;
const fun=()=>{
    counterEl.textContent=`${idx}%`;
    loadingBarFrontEl.style.width=`${idx}%`;
    idx +=1;
    if(idx<101){
        setTimeout(fun,20);
    }
}
fun();