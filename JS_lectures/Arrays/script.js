let favMovie = "Leo";
let quit = "quit";
let guess = prompt("Enter your guess");

while (guess !== favMovie) {
    guess = prompt("Your guess is incorrect. Try again");
    if (guess === quit) {
        console.log("You quit");
        break;
    }
}
if (guess === favMovie) {
    console.log("You guessed the correct movie");
}

