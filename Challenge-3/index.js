const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a string : ", function (input) {
    const reversed = input.split("").reverse().join("");
    if (input === reversed) {
        console.log(`The string '${input}' is a palindrome.`);
    } else {
        console.log(`The string '${input}' is not a palindrome.`);
    }

    rl.close();
});
