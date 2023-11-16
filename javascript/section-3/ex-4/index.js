function operateOnArray(arr,map){
    return map(arr);
}

function map(arr){
    const squaredArr=[];
    for(let i=0;i<arr.length;i++){
        squaredArr[i]=arr[i]*arr[i];
    }
    return squaredArr;    
}

let arr=[1,2,3,4,5,6,7,8,9];
console.log(operateOnArray(arr,map));