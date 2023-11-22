const addButton=document.getElementById("add");
const deleteButton =document.getElementById("delete");
const table = document.getElementById("sequence-table");

let number=1;

function insertRow1(){
    let row = table.insertRow(-1);
    let cell1=row.insertCell(0);
    cell1.textContent=++number;
}

function deleteRow1(){
    if(table.rows.length>0){
       let row = table.deleteRow(-1);
       number--;
    }    
}