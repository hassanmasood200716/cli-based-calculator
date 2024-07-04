#! /usr/bin/env node
import inquirer from "inquirer";
console.log("the developer of this game is hassan masood");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "plz guess a number between 1 till 10: ",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulation you guessed write number");
}
else {
    console.log("you guessed wrong number");
}
