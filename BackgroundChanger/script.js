//get element from dom
const whiteEl=document.getElementById("white");
const blackEl=document.getElementById("black");
const purpleEl=document.getElementById("purple");
const brownEl=document.getElementById("brown");
//add event listener of white button
whiteEl.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";

});
//add event listener of black button
blackEl.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
});
//add event listener of purple button
purpleEl.addEventListener("click",()=>{
    document.body.style.backgroundColor="purple";
    document.body.style.color="white";

});
//add event listener of brown button
brownEl.addEventListener("click",()=>{
    document.body.style.backgroundColor="brown";
    document.body.style.color="white";

});