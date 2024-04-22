#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// step 1
const answer = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Please Enter The First Number:",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Please Enter The Second Number:",
  },
  {
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplcation",
      "Division",
      "Exponentiate",
      "Reminder",
    ],
    message: "Please Enter The Operator:",
  },
]);

// step 2
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
  case "Addition":
    result = numberOne + numberTwo;
    break;
  case "Subtraction":
    result = numberOne - numberTwo;
    break;
  case "Multiplcation":
    result = numberOne * numberTwo;
    break;
  case "Reminder":
    result = numberOne % numberTwo;
    break;
  case "Division":
    result = numberOne / numberTwo;
    break;
  default:
    console.log("Please Put Invalid Number");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
