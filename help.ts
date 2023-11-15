import chalk from "chalk";
import gradient from "gradient-string";

export let login = [
    {
        type: "number",
        name: "data",
        message: gradient.rainbow("Please Enter your Pin to login"),
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please Enter Your Pin in Numbers"
            }else {
                return true;
            }
        }
    }
]
export let atmFunction = [
    {
        type: "list",
        name: "option",
        choices: ["Deposit Money","withdraw Money","Check Balance"],
        message: gradient.rainbow("Please select the service you want")
    }
]
export let deposit = [
    {
        type: "number",
        name: "moneydeposit",
        message: gradient.rainbow("Enter your Deposit Money"),
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please Enter Your Amount in Numbers"
            }else {
                return true;
            }
        }
    }
]
export let withDraw = [
    {
        type: "number",
        name: "moneyWithdraw",
        message: gradient.rainbow("Enter amount to withdraw from your account"),
        validate: (input:number)=>{
            if(isNaN(input)){
                return "Please Enter Your Amount in Numbers"
            }else {
                return true;
            }
        }
    }
]
export let confirmed = [
    {
        type: "confirm",
        name: "more",
        message: gradient.morning("Do You want another Transaction")
    }
]