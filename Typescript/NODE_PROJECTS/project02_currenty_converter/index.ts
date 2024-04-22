// install inquirer

import inquirer from "inquirer";

// currency conversion object

let currencyconversion = {
  PKR: {
    USD: 0.0036,
    GBP: 0.0029,
    PKR: 1,
  },
  GBP: {
    USD: 1.24,
    GBP: 1,
    PKR: 344.76,
  },
  USD: {
    USD: 1,
    GBP: 0.81,
    PKR: 278.65,
  },
};

// prompt user for input
const answer: {
  from: "PKR" | "GBP" | "USD";
  to: "PKR" | "GBP" | "USD";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "Please select you currency?",
    choices: ["PKR", "GBP", "USD"],
  },
  {
    type: "list",
    name: "to",
    message: "Please select you converstion rate",
    choices: ["PKR", "GBP", "USD"],
  },
  {
    type: "number",
    name: "amount",
    message: "Please enter the amount you wish to convert",
  },
]);

//Destrructing User Input

const { from, to, amount } = answer;

// perform currency conversion

if (from && to && amount) {
  let result = currencyconversion[from][to] * amount;
  console.log(`your conversion from ${from} to ${to} is ${result}`);
} else {
  console.log("invalid ConversiUSD");
}
