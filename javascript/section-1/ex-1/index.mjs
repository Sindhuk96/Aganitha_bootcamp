import chalk from 'chalk';
import readline from 'readline';

const rl=readline.createInterface(process.stdin, process.stdout);

rl.question("enter helloworld message your way:",(message)=>{
    const welcome=chalk.green;
    console.log(welcome(message));
    rl.close();
});

