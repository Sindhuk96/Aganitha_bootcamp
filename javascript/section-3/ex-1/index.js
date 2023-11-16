function A(f,g){

    return function(x){
    return f(g(x));
    };
}

function f(a){
    return a*10;
}

function g(a){
    return a+10;
}

let resFunc=A(f,g);
const res=resFunc(30);

console.log(res);

