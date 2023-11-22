const emailForm=document.getElementById("form");
const email=document.getElementById("email");
const emailButton=document.getElementById("signup");
const errorMessage=document.getElementById("errorMessage");

emailForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(email.validity.valid);
    if(!email.validity.valid){
        errorMessage.textContent=email.validationMessage;
    }else{
        errorMessage.textContent="valid mail";
    }
});