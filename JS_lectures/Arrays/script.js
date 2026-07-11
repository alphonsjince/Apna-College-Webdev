let maxGuess = Number(prompt("Enter max no. to which u want to guess "));

let maxNumber = Math.floor(Math.random() * maxGuess + 1);

console.log(maxNumber);

let userGuess = Number(prompt("Now guess your number"));


while (true) {
    if (userGuess < maxNumber) {
        userGuess = Number(prompt("U guessed smaller number guess a higher no."));
    } else if (userGuess > maxNumber) {
        userGuess = Number(prompt("U guessed higher number guess a smaller no."));
    } else if (userGuess === maxNumber) {
        console.log("U have guessed the right no.");
        break;
    } else {
        userGuess = Number(prompt("Guess wrong request!!"));
    }
        
}