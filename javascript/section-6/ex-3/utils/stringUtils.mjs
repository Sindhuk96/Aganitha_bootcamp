function reverseString(str){
    
    console.log(`Initial String : ${str}`);
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];    
    }
    console.log(`Reverse String : ${rev}`);
    return rev;
}

function countCharacters(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        count++;
    }
    return count;    
}

export {reverseString,countCharacters};