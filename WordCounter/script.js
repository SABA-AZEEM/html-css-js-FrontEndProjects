//get Element from dom
const textareaEl=document.getElementById("textarea");
const wordsEl=document.getElementById("words");
const charactersEl=document.getElementById("characters");
let charCount=0;
//function of textarea
textareaEl.addEventListener("input",(event)=>{
    charactersEl.textContent=++charCount;
    let words=event.target.value.trim();
    let newWords=words.split(/\s+/);
    // let arrText=newWords.filter(function(elm){
    //     return elm!="";
    // });          OR
    wordsEl.textContent=newWords.length;
});
