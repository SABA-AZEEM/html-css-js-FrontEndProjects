const navEl=document.getElementsByTagName("nav");
//function
window.addEventListener("scroll",(event)=>{
    if(window.scrollY>=268){
        navEl[0].classList.add("sticky");
    }
    else{
        navEl[0].classList.remove("sticky");
    }
})