function multiplyBy(x){
    return function(y){
        return x*y;
    }
}

const resfunc=multiplyBy(9);
const res=resfunc(2);
console.log(res);