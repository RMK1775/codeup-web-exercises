// function skipOddPrompt(){
//
// }

// function = number passed = ? 0 to number passed ex. passed 4 return 10 (0 + 1 + 2 + 3 + 4)
// number passed = 1 to 100; positive numbers only

function addUp(numberReceived){
    let finalCount = 0;
    for (let i = 1; i <= numberReceived ; i++){
        finalCount = finalCount + i;
    }
    return finalCount;
}

addUp(4);

//Prompt user for PIN, max three tries to get correct after that locked out
function verifyPin() {
    const pin = 1234;
    const maxAttemptsAllowed = 3;
    let failedAttempts = 0;

    //Loop starts here
    do {
        let userEntry = prompt('Enter your PIN please.');

        if (parseInt(userEntry) === pin) {
            alert('Welcome back...');
            break;
        } else {
            alert('Invalid PIN entered. You have ' + (maxAttemptsAllowed - failedAttempts) + ' attempts left.');
            failedAttempts++; // or ++attemptsCount; ?
        }
    }while(failedAttempts !== maxAttemptsAllowed)
    //Get me out of this loop hell!
    //Uh-oh
    if (failedAttempts === maxAttemptsAllowed) {
        alert("Shame you couldn't remember your anniversary/PIN");
    }

}

verifyPin();