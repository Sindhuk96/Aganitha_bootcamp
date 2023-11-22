const clickButton=document.getElementById('button');
let clickCount=document.getElementById('count');

let count=0;

clickButton.addEventListener('click',()=>{
    count++;
    clickCount.textContent=count;
});