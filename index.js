const chalk = require('chalk');
var readlineSync = require('readline-sync');

//welcome + name input 
console.log(chalk.bgBlue("Welcome to this Tech Quiz !"));
var name = readlineSync.question(chalk.blue("Please enter your name: "));
console.log("Let's start the quiz",name);
console.log("--------------------------------");
var score = 0;

//function implementation
function quiz(question,answer){
    var userAnswer = readlineSync.question(question);
    if(answer===userAnswer){
        console.log(chalk.green("You are correct!"));
        score = score + 1;
    }
    else{
        console.log(chalk.red("You are wrong! The correct answer is",answer));
        score = score - 1;
    }
    console.log("----------------------------");
    console.log("Current score: ",score);
    console.log(" ");
}

//inputting different values in function
quiz(chalk.yellow("What is an 8 core CPU called ? "),"octacore");
quiz(chalk.yellow("Which CPU manufacturer is also called as team blue ? "),"intel");
quiz(chalk.yellow("Dual channel memory configuration requires how many sticks of RAM ? "),"2");

//printing out final score + gratitude 
console.log("Thank you for joining in",name);
console.log(chalk.bgGray("Your final score is: "),score);