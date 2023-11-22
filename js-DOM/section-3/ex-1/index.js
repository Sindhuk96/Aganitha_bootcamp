const slider=document.getElementById("fontslider");
const content=document.getElementById("content");

content.style.fontSize=`${slider.value}px`;

slider.addEventListener("input",()=>{
    content.style.fontSize=`${slider.value}px`;   
})