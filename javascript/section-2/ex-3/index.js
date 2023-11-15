const str="Hello"
console.log(`Initial Array : ${str}`);

let rev="";
for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i];    
}

console.log(`Reverse Array : ${rev}`);