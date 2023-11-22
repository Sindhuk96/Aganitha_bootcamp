const search=document.getElementById("searchbox");
const items=document.querySelectorAll(".item");

search.addEventListener("input",()=>{
    const filter=search.value.toUpperCase();
    items.forEach(item => {
        if(item.textContent.toUpperCase().includes(filter)){
            item.style.display="block";
        }else{
            item.style.display="none";     
        }
        
    });

})