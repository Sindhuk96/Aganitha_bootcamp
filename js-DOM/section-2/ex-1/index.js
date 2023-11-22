const hoverEvent=document.getElementById("events");
hoverEvent.addEventListener("mouseenter",()=>{
    hoverEvent.style.color="red";
});

hoverEvent.addEventListener("mouseleave",()=>{
    hoverEvent.style.color="black";
});