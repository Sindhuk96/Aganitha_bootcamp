const str=["Ram","sita","Krishna","Shiva","Durga","Saraswati"];
console.log(`Initial Array : ${str}`);
let concatstr=str[0];

for(let i=1;i<str.length;i++){
    concatstr+=" "+str[i];
}

console.log(`Concatenated String : ${concatstr}`);