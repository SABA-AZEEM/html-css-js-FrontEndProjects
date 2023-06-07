//getting dom elements
const slidesEl=document.querySelectorAll(".slide");
//initialize var
    let flag=0;
//Left shift function
    const leftShift=()=>{
        --flag;
        if(flag<0){
            flag=slidesEl.length-1;
        }
        slideShow(flag);
    }
//right shift function
    const rightShift=()=>{
        ++flag;
        if(flag===slidesEl.length){
            flag=0;
        }
        slideShow(flag);
    }

//General function
    const slideShow=(num)=>{
       
       for(let i of slidesEl){
        i.style.display="none";
       }
       slidesEl[num].style.display="block";
    }
//functin call
    slideShow(flag);