//get element from dom and create variables
const nameEl=document.getElementById("name");
const passEl=document.getElementById("password");
const name_errorEl=document.getElementById("name-error");
const pass_errorEl=document.getElementById("pass-error");
let flag=1;
//function
let validateForm=()=>{
    if(nameEl.value===""){
        name_errorEl.classList.add("error");
        name_errorEl.textContent="Enter your name.";
        flag=0;
    }else if(nameEl.value.length<3){
        name_errorEl.classList.add("error");
        name_errorEl.textContent="Min 3 characters require.";
        flag=0;
    }else{
        name_errorEl.classList.remove("error");
        name_errorEl.textContent="";
        flag=1;
    }

    if(passEl.value===""){
        pass_errorEl.classList.add("error");
        pass_errorEl.textContent="Enter Password.";
        flag=0;
    }else{
        pass_errorEl.classList.remove("error");
        pass_errorEl.textContent="";
        flag=1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}