// const chalk=require('chalk');   ---->> It's not work now because chalk is Updated 
                                         //if you use import the make sure in package.json file 
                                         //you add "type": "module",
                                         //otherwish it's give error

//  import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.inverse('Hello world!'));
// console.log(chalk.red.italic.inverse('error'));



// email validator
const validator = require("email-validator");
console.log(validator.validate("subhadip@gmail.com"));


///////////////////Assignment///////////////
//add any globle module like *nodemon*