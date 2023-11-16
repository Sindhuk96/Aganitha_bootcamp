function composeWithReduce(funcs){

    return function reducedFuncs(arg){
        return funcs.reduce((acc,func)=>func(acc),arg);
    };

}

function addByTwo(x){
    return x+2;
}

function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}

let arr=[addByTwo,square,cube];
const reduceFunc=composeWithReduce(arr);
const res=reduceFunc(1);

console.log(`Final result is: ${res}`);