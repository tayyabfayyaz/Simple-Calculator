import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter your first number:", type: "number", name: "firstNumber" },
  {
    message: "Enter your second number:",
    type: "number",
    name: "secondNumber",
  },

  {
    message: "Select one of the Operator to perform Operation:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Divission"],
  },
]);

if (asnwer.operator === "Addition") {
  let resultAdd = asnwer.firstNumber + asnwer.secondNumber;
  console.log(`Your answer is: ${resultAdd}`);
} else {
  if (asnwer.operator === "Substraction") {
    let resultSub = asnwer.firstNumber - asnwer.secondNumber;
    console.log(`Your answer is: ${resultSub}`);
  } else {
    if (asnwer.operator === "Multiplication") {
      let resultMulti = asnwer.firstNumber * asnwer.secondNumber;
      console.log(`Your answer is: ${resultMulti}`);
    } else {
      if (asnwer.operator === "Divission") {
        let resultDivi = asnwer.firstNumber / asnwer.secondNumber;
        console.log(`Your answer is: ${resultDivi}`);
      } else {
      }
    }
  }
}
