#! /usr/bin/env node
import inquirer from "inquirer";
import gradient from "gradient-string";
import showBanner from "node-banner";
import chalk from "chalk";
import { login, atmFunction, deposit, withDraw, confirmed } from "./help.js";
(async () => {
    await showBanner('Hamza ATM', 'Your Account Pin & Balance will generate randomly', 'blue', 'green');
})();
/***************************generate random data *******************************/
let randomPin = Math.round(Math.random() * 10000);
let randomdata = {
    userPin: randomPin,
    accountbalance: 1000
};
/***************************Main function of the Code ****************************/
let condition = true;
setTimeout(async () => {
    console.log(chalk.bold.magentaBright.italic(`Your Account Pin is ${randomdata.userPin} and balance is ${randomdata.accountbalance}`));
    let { data } = await inquirer.prompt(login); // Asking User for Pin
    if (data === randomdata.userPin) { // Comparing userPin with random Pin
        console.log(gradient.pastel("Congratulation, You are login to Hamza ATM services"));
        do { // create loops for user further transaction
            let { option } = await inquirer.prompt(atmFunction); // Showing Atm functionality to user 
            if (option === 'Deposit Money') { // when user want to deposit money
                let { moneydeposit } = await inquirer.prompt(deposit); // Asking for amount user want to deposit
                randomdata.accountbalance += moneydeposit; // depoist money is added to user account
                console.log(gradient.mind("Congratulation, Your cash is deposit successfully"));
                console.log(gradient.vice("Your new Account Balance is " + randomdata.accountbalance));
                let { more } = await inquirer.prompt(confirmed); // Asking user for further transaction
                condition = more; // Saving user response in loop condition 
            }
            else if (option === 'Check Balance') { // when user want to check balance
                console.log(gradient.mind(`Your current Account Balance is  ${randomdata.accountbalance}`));
                let { more } = await inquirer.prompt(confirmed); // Asking user for further transaction
                condition = more; // Saving user response in loop condition 
            }
            else if (option === 'withdraw Money') { // when user want to withdraw money
                let { moneyWithdraw } = await inquirer.prompt(withDraw); // Asking for amount user want to withdraw
                if (moneyWithdraw > randomdata.accountbalance) { // checking if withdraw amount is more than
                    console.log(gradient.retro("Sorry, You have Insufficient Balance to withdraw")); // available balance
                    let { more } = await inquirer.prompt(confirmed); // Asking user for further transaction
                    condition = more; // Saving user response in loop condition
                }
                else {
                    randomdata.accountbalance -= moneyWithdraw; // withdraw money is remove from user accnt
                    console.log(gradient.mind("Congratulation, Your cash is withdraw successfully"));
                    console.log(gradient.vice("Your new Account Balance is " + randomdata.accountbalance));
                    let { more } = await inquirer.prompt(confirmed); // Asking user for further transaction
                    condition = more; // Saving user response in loop condition
                }
            }
        } while (condition); // loop condition for further execution
    }
    else {
        console.log(chalk.bold.redBright.italic("Sorry, Your Pin is invalid")); // if user enter invalid pin
    }
}, 1000); // functiom execute after 1 second
