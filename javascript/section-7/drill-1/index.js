const prompt = require('prompt-sync')({sigint: true});

function fibNotOptimised(n){
    if(n<=1){
        return n;
    }

    return fibNotOptimised(n-1)+fibNotOptimised(n-2);
}

let dp=[];

function fiboptimised(n){
    if(n<=1){
        return n;
    }

    if(dp[n]){
        return dp[n];
    }

    dp[n]=fiboptimised(n-1)+fiboptimised(n-2);
    return dp[n];
}


    let start = Date.now();
    const num = prompt('Enter a number: ');
    console.log(`nth fibonacii number:${fibNotOptimised(num)}`);    
    let timeTaken = Date.now() - start;
    console.log(`Time taken without optimisation:${timeTaken}`); 

    start = Date.now();
    console.log(`nth fibonacii number:${fiboptimised(num)}`);     
    timeTaken = Date.now() - start;
    console.log(`Time taken without optimisation:${timeTaken}`); 

