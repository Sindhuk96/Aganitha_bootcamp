const arr=[2,5,6,7,10,12,14,13,24,33];
console.log(`Initial Array : ${arr}`);
const oddarr=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        oddarr.push(arr[i]);
    }
}

console.log(`Array having only odd numbers: ${oddarr}`);