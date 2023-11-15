let arr=[1,2,3,4,5,6,7,8,9];
console.log(`Initial Array : ${arr}`);

const squaredArr=[];
for(let i=0;i<arr.length;i++){
    squaredArr[i]=arr[i]*arr[i];
}
console.log(`Squared Array : ${squaredArr}`);