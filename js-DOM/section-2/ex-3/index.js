const form=document.getElementById("form");
const inputname=document.getElementById("inputname");
const clickButton=document.getElementById("button");
const list=document.getElementById("list");

form.addEventListener("submit",(e)=>{

        e.preventDefault();
        let li=document.createElement("li");
        li.textContent=`${inputname.value}`;
        list.appendChild(li);

});