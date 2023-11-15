const arr=[1,2,3,4,5,6,7,8,9];
console.log(`Initial Array : ${arr}`);
const evenarr=[];
const oddarr=[];

for(let i=0;i<arr.length;i++){
    if(i%2==0){
        evenarr.push(arr[i]);
    }else{
        oddarr.push(arr[i]);
    }
}

console.log(`EvenIndex Array : ${evenarr}`);
console.log(`OddIndex Array : ${oddarr}`);