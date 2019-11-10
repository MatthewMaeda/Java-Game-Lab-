//variables for grant health, user health and deaths
let grantHealth = 10; //grant starts at 10 HP
let grantDeath = 0; //Death Counter, if counter reaches 3 = grant looses 
let userHealth = 40; //user starts at 40 HP 
let userDeath = 0;

/*******************************************************************
 * Function for random Number generator for attach damage
 * 1 or 2 Damage taken from the random number generator 
 *******************************************************************/
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 2) -1;
}

/*******************************************************************
 * comment
 *******************************************************************/



/*******************************************************************
 * Conditions for game to stop running either A or B will stop it:
 * A. Grant has been defeated three times (i.e.,, the user has three wins)
 * B. User has been defeated (hit 0 health points). 
 * When the game is over, the application logs the winner.
 *******************************************************************/
while (userHealth > 0 && grantDeath < 3) {
    //two random numbers minus from the user and grants health    
    grantTotal = grantHealth -= randNumber;
    userTotal = userHealth -= randNumber;

    //log out damage and health
    console.log(grantTotal);
    console.log(userTotal);

    //if grant dies
    if (grantHealth <= 0) {
        grantDeath++;
        grantHealth = 10;
    }

    //if user dies
    if (userHealth <= 0) {
        grantDeath++;
        grantHealth = 10;
    }
    
    //log winner and break;
    console.log();
    console.log();
}