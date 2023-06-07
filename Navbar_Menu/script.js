const barEl=document.querySelector(".fa-bars");
const navEl=document.querySelector("nav");
barEl.addEventListener("click",()=>{
    navEl.classList.toggle("nav-new");
})