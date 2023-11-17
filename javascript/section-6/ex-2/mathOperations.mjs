function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function squareRoot(a){

    let sqrt;
    for(let i=1;i*i<=a;i++){
        if(i*i==a){
            return i;
        }
        sqrt=i;
    }
    return sqrt;
}

export {add,subtract,multiply,divide,squareRoot};