const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function(sentence) {
    const words = sentence.trim().split(/\s+/);
    const wordCount = sentence.trim() === "" ? 0 : words.length;

    // Reverse the order of words
    const reversedSentence = words.reverse().join(" ");

    // Replace spaces with hyphens
    const modifiedSentence = sentence.trim().replace(/\s+/g, "-");

    // Display the results
    console.log("Number of words:", wordCount);
    console.log("Reversed sentence:", reversedSentence);
    console.log("Modified sentence:", modifiedSentence);

    rl.close();
});
