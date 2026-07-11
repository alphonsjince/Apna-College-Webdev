let maxGuess = Number(prompt("Enter max no. to which u want to guess "));

let maxNumber = Math.floor(Math.random() * maxGuess + 1);

console.log(maxNumber);

let userGuess = Number(prompt("Now guess your number"));


while (true) {
    if (userGuess == maxNumber) {
        console.log("You have guessed the right no.", userGuess);
        break;
    } else {
        userGuess = prompt("Guess Again");
    }
}