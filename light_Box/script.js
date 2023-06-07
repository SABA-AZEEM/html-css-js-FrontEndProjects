//get element from dom
const imgEl=document.getElementById("img");
const popupEl=document.querySelector(".popup");
const closeBtnEl=document.getElementById("close-button");
const leftBtnEl=document.getElementById("left-button");
const rightBtnEl=document.getElementById("right-button");
const imgs=document.querySelectorAll(".pop-img");
let flag=0;
//function to display popup
imgEl.addEventListener("click",()=>{
    popupEl.style.display="block";
});
//function to close btn
closeBtnEl.addEventListener("click",()=>{
    popupEl.style.display="none";
})
//function for right button click
    const rightShift=()=>{
        ++flag;
        leftBtnEl.style.display="block"
        if(flag===imgs.length){
            flag=imgs.length-1;
            rightBtnEl.style.display="none";
        }
        slideShow(flag);
    }
//function for left button click
const leftShift=()=>{
    --flag;
    rightBtnEl.style.display="block"
    if(flag<0){
            flag=0;
            leftBtnEl.style.display="none";
    }
    slideShow(flag);
}
//general function
function slideShow(num){
    for(let i of imgs){
        i.style.display="none";
       }
    imgs[num].style.display="block";
}
slideShow(flag);