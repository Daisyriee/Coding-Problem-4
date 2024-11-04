function favNumber() {

    const favNum = 69;
    
    let userGuess = prompt("Guess my favorite number between 1 and 100:");
    
    userGuess = Number(userGuess);

    if (userGuess === favNum) {
        alert("You guessed it!");
    } else if (userGuess < favNum) {
        alert("Too low.");
    } else if (userGuess > favNum) {
        alert("Too high!");
    } else {
        alert("Invalid")
    }
}