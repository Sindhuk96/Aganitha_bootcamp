const myForm=document.getElementById("myForm");
myForm.addEventListener("submit",function(e){
    e.preventDefault();

    let formData=new FormData(e.target);
    let formDataObject={};

    formData.forEach((value,key)=>{
        formDataObject[key]=value;
    })

    console.log(formDataObject);
})