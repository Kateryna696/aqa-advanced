import chalk from 'chalk';
let a='This is color text';
let b;
b='Blue bold';
console.log(chalk.magentaBright(a));
console.log(chalk.blue.bold(b) + ' and ' + chalk.red.italic('Red italic')+ ' text');