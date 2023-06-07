    //getting elements from dom
const videoEl=document.querySelector("video");
const btnEl=document.querySelector(".btn");
const iconEl=document.querySelector(".fa");
const preloaderEl=document.querySelector(".preloader");
    //add eventListener to btn
btnEl.addEventListener("click",()=>{
    if(btnEl.classList.contains("pause")){
        btnEl.classList.remove("pause");
        videoEl.play();
        iconEl.classList.add("fa-pause");
        iconEl.classList.remove("fa-play");
    }else{
        btnEl.classList.add("pause");
        videoEl.pause();
        iconEl.classList.remove("fa-pause");
        iconEl.classList.add("fa-play");
    }
});
//function to see preloader before anything see
window.addEventListener("load",()=>{
    preloaderEl.style.zIndex ="-999";
})