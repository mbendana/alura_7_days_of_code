
let randomNumber = Math.ceil(Math.random() * 10);
//console.log(`The random number is: ${randomNumber}`);

let userNumber = 0;
let tries = 3;
let triesText = "";

while(! isNaN(userNumber) && tries--)
{
    userNumber = parseInt(prompt("Enter a number from 1 to 10 to guess the random number: "));
    triesText = tries === 1 ? "try" : "tries"

    if(randomNumber === userNumber)
    {
        alert(`You guessed the number: ${randomNumber}.`);
        break;
    }

    if(tries)
    {
        if(randomNumber > userNumber)
        {
            alert(`${userNumber} is not the correct random number. 
                The random number is higher.
                You have ${tries} ${triesText} left.`);
        }
        else if(randomNumber < userNumber)
        {
            alert(`${userNumber} is not the correct random number.
                The random number is lower.
                You have ${tries} ${triesText} left.`);
                
        }
        //alert(`You have ${tries} ${triesText} left.`);
    }
    else
    {
        alert(`You didn't guess the random number.
            The random number was: ${randomNumber}.`);
        break;
    }
}

