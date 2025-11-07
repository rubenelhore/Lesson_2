const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let counterComputer = 0;
let counterPlayer = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayWinner (choice, computerChoice) {
    switch (choice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    return 'Its a tie!';
                case 'scissors':
                    return 'You win!';
                case 'paper':
                    return 'Computer wins!';
                case 'spock':
                    return 'Computer wins!';
                case 'lizard':
                    return 'You win!';
            }
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    return 'You win!';
                case 'scissors':
                    return 'Computer wins!';
                case 'paper':
                    return 'Its a tie!';
                case 'spock':
                    return 'You win!';
                case 'lizard':
                    return 'Computer wins!';
            }
        case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    return 'Computer wins!';
                case 'scissors':
                    return 'Its a tie!';
                case 'paper':
                    return 'You win!';
                case 'spock':
                    return 'Computer wins!';
                case 'lizard':
                    return 'You win!';
            }  
        case 'spock':
            switch(computerChoice) {
                case 'rock':
                    return 'You win!';
                case 'scissors':
                    return 'You win!';
                case 'paper':
                    return 'Computer wins!';
                case 'spock':
                    return 'Its a tie!';
                case 'lizard':
                    return 'Computer wins!';
            } 

        case 'lizard':
            switch(computerChoice) {
                case 'rock':
                    return 'Computer wins!'
                case 'scissors':
                    return 'Computer wins!';
                case 'paper':
                    return 'You win!';
                case 'spock':
                    return 'You win!';
                case 'lizard':
                    return 'Its a tie!';
            }  
    }

}

prompt('Welcome to the rock, paper, scissors, lizard, spock game');
prompt('The first to win 3 rounds wins the match!');

while(true) {

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let result = displayWinner(choice, computerChoice);
    
    if (result === 'You win!') {
        counterPlayer++;
    } else if (result === 'Computer wins!') {
        counterComputer++;
    }

    prompt(result);

    prompt(`Computer points: ${counterComputer} - Player points: ${counterPlayer}`);

    if (counterPlayer === 3) {
        prompt('YOU WON THE MATCH!');
        break;
    }

    if (counterComputer === 3) {
        prompt('THE COMPUTER WON THE MATCH!');
        break;
    }
}