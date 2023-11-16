function caluclate(a,b,sum){
        return sum(a,b);
}

function sum(a,b){
    return a+b;
}

const res=caluclate(5,10,sum);
console.log(`Final result is: ${res}`);