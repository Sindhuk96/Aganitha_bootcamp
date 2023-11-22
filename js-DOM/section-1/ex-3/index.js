const clickButton=document.getElementById('button');

let colors=['blue','green','red','yellow','black'];
clickButton.addEventListener('click',()=>{

    let randomIndex=Math.floor(Math.random()*colors.length);
    console.log(randomIndex);
    let randomColor=colors[randomIndex];
    console.log(randomColor);
     document.body.style.background=randomColor;

});