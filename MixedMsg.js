const fs = require('node:fs');
const readline = require('node:readline');

//  Prepare user interface
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputMsg = [];

//  Read random message from input file
try{
    inputMsg = fs.readFileSync('inputMessage.txt', 'utf-8');
}catch(err){
    console.log('An error occured during reading the input file, please make sure that the input file is there!');
    console.error(err);
}

//  Eliminate all seperators but spaces from the string
inputMsg = inputMsg.replace(/[.,:;\n\r]/g, '');

const randomWordArray = inputMsg.split(' ');

//  Recursive function to take user input until user chooses to close the program
const takeUserInput = () => {
    io.question('Do you want to generate a random word? (I will take everything except \'n\' as a yes, and if you give me a number I will generate you a sentence including that many words):\n', userInput => {
    //  user's choice to close the program
    if(userInput.toLowerCase() === 'n'){
        io.close();
        return;
    }
    //  in case user chooses to generate a sequence of words (a sentence) by passing a number instead of a character
    else if(!Number.isNaN(Number(userInput)) && Number(userInput) > 0){
        userInput = Number(userInput);
        let randomWordsList = [];
        for(let i = 0; i < userInput; i++){
            randomIndex = Math.floor(Math.random() * (randomWordArray.length));
            randomWordsList.push(randomWordArray[randomIndex]);
        }
        randomWordsList = randomWordsList.join(' ');
        console.log(`-> Here is a random sentence: ${randomWordsList}`);
        console.log('=====================================================\n');
    }
    //  in case user chooses to generate a single word by pressing any non-numerical character but n
    else{
        randomIndex = Math.floor(Math.random() * (randomWordArray.length));
        console.log(`-> Here is a random word: ${randomWordArray[randomIndex]}`);
        console.log('=====================================================\n');
    }

    //  user input is taken until user chooses otherwise
    takeUserInput();
    })
}

//  Check against an empty file
if(randomWordArray.length === 1 && randomWordArray[0] === ''){
    console.log("Error in input message file. It seems there are no words in this file. Please enter a text and retry program");
    io.close();
}
else{
    takeUserInput();
}