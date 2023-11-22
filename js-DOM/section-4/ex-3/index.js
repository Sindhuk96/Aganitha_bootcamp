const search=document.getElementById("searchbox");
const count=document.getElementById("count");
let charCount=0;
search.addEventListener("keyup",function(e){
    console.log(++charCount);
    count.textContent=`Search character count:${charCount}`;
});