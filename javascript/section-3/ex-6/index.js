function sortNumbers(arr,compare){
    return arr.sort(compare);
}

function compare(a,b){
    return a-b;
}

let arr=[9,6,12,36,58,2,11];
console.log(`Array before sorting : ${arr}`);
let sortedarr=sortNumbers(arr,compare);
console.log(`Array after sorting : ${sortedarr}`);

