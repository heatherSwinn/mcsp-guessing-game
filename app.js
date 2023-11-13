function play() {
    let secretNumber = "5";
    let attempts = 1;
    let tries = [];

    const name = prompt("What is your name?");

    while(true) {

        const guess = prompt("Guess a number!");
        if (guess === null) {
            alert("Goodbye!")
            break;
        }
        if (guess == secretNumber && attempts == 1) {
            alert(`Congratulations ${name}! You won!`)
            alert(`${name} you guessed right on the first try! The correct answer was ${secretNumber}.`)
            break;
        }

        if (guess == secretNumber) {
            alert(`Congratulations ${name}! You won!`)
            alert(`It took you ${attempts} attempts! Your previous answers were ${tries}. The correct answer was ${secretNumber}.`)
            break;
        }
        if (guess > secretNumber) {
            alert(`Sorry ${name}, guess lower!`);


        }
        if (guess < secretNumber) {
            alert(`Sorry ${name}, guess higher!`);

        }
        tries.push(guess);
        attempts += 1;
    }
}

play()