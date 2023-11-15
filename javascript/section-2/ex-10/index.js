let arr=[-1,2,-3,4,5,-6,7,8,9];
console.log(`Initial Array : ${arr}`);

let positiveSum=0;
for(let i=0;i<arr.length;i++){

    if(arr[i]>0){
        positiveSum+=arr[i];
    }
}
console.log(`Summ of all positive numbers : ${positiveSum}`);