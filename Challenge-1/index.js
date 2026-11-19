const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");

function calculate(expression) {
    expression = expression.replace(/\^/g, "**");
    expression = expression.replace(/×/g, "*");
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/=$/, "").trim();

    return Function(`"use strict"; return (${expression})`)();
}

const expressions = input.split(/\r?\n/);

let output = "";

expressions.forEach((expression) => {
    expression = expression.trim();

    if (expression !== "") {
        try {
            const answer = calculate(expression);
            output += `${expression} = ${answer}\n`;
        } catch (error) {
            output += `${expression} = Invalid Expression\n`;
        }
    }
});

fs.writeFileSync("output.txt", output);

console.log("All expressions solved successfully!");
console.log("Check output.txt for answers.");
