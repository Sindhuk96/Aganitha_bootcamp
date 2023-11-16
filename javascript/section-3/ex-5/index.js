function curry(binaryfunc){
    return function curried1(arg1){
        return function curried2(arg2){
            return binaryfunc(arg1,arg2);
        };
    };
}

function binaryfunc(a,b){
    return a*b;
}

let curried1=curry(binaryfunc);
let curried2=curried1(5);
let res=curried2(3);

console.log(`Executing binary function using currying: ${res}`);

