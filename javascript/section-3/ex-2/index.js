function filterAndMap(arr,filter,map){
    return map(filter(arr));
}

function filter(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            res.push(arr[i]);
        }
    }

    return res;
}

function map(arr){
    const squaredArr=[];
    for(let i=0;i<arr.length;i++){
        squaredArr[i]=arr[i]*arr[i];
    }
    return squaredArr;    
}

let arr=[1,2,3,4,5,6,7,8,9];
console.log(filterAndMap(arr,filter,map));