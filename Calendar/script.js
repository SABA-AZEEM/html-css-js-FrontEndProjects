//get element from dom and variables and constant
const monthEl=document.querySelector(".month");
const dateEl=document.querySelector(".date");
const daysEl=document.querySelector(".days");
const month= new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), month + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), month, 1).getDay() - 1;


//date object

const monthName=["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];

monthEl.innerHTML=monthName[month];

//set date element

dateEl.textContent=new Date().toDateString();
//set empty box
for(let i=0;i<firstDay;i++){
    const newDiv=document.createElement("div");
    newDiv.textContent="";
    daysEl.appendChild(newDiv);
}
//set days
for(let i=1;i<=lastDay;i++){
    if(i===new Date().getDate()){
        const newDiv=document.createElement("div");
        newDiv.textContent=i;
        newDiv.classList.add("today");
        daysEl.appendChild(newDiv);

    }
    const newDiv=document.createElement("div");
    newDiv.textContent=i;
    daysEl.appendChild(newDiv);
}