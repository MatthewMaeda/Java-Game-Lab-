//prompt to ask if the user wants to play the game? types 'yes'
let startGame = prompt("Do you want to play?");
if (startGame.toLowerCase() === "yes") {
    //initialize variables for user / grants && healths for both 
    let userName = prompt("What is your name?");
    let userHp = 40;
    let grantHp = 10;
    let wins = 0;
    //logs the starting health of both users and grants hp
    console.log(`${userName}'s health is ${userHp} and Grant's health is ${grantHp}.`);
    //starts the loop and the game is started
    while(startGame) {
        //random number is subtracted to the user and grants health
        console.log(`${userName}'s Health: ${userHp -= Math.floor((Math.random()* 2) + 1)} left`);
        console.log(`Grant's Health: ${grantHp -= Math.floor((Math.random()* 2) + 1)} left`);
        //condition when user Health hits 0 or less than 0, Grant Wins 
        if (userHp <= 0) {
            console.log(`${userName}, you have lost. Grant WINS!`);
            break;
            //condition if grants health hits 0 or less than 0, user wins 
        } else if (grantHp <= 0) {
            //wins plus 1
            wins++;
            //output win and also adds up all the previous wins to show how many more wins you need to win the whole game
            console.log(`${userName}, you win! Only ${3-wins} wins left to go.`);
            //grants hp is reset to 10 when user wins
            grantHp = 10;
        }
        //condition to win the while game, when user wins 3 times 
        if (wins === 3) {
            console.log(`Victory! You have defeated Grant 3 times!`);
            break;
        }
    }

} else {
    //if something goes wrong
    console.log("Error: Try again.")
}






