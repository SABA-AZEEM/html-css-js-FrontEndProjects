//get element from dom
const yearEl=document.getElementById("year");
const monthEl=document.getElementById("month");
const dayEl=document.getElementById("day");
const dateEl=document.getElementById("date");
//create date element
const date=new Date();
dateEl.innerText=date.getDate();
yearEl.innerText=date.getFullYear();
monthEl.innerText=date.toLocaleDateString("en",{
    month:"long",
});
dayEl.innerText=date.toLocaleDateString("en",{
    weekday:"long",
})