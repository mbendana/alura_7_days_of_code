
let userChoice = "";
let userChoiceInt = NaN;

while(isNaN(userChoiceInt))
{
    userChoice = prompt("Choose between Frontend (1) or Backend (2):");
    userChoiceInt = parseInt(userChoice[0]);
}

if(userChoiceInt == 1)
{
    userChoice = prompt("Would you like to learn React or Vue?");
}
else if(userChoiceInt == 2)
{
    userChoice = prompt("Would you like to learn C# or Java?");
}
else
{
    alert(`Select (${userChoiceInt}) not supported.`);
}

alert(`After learning Frontend or Backend, would you like
     to continue specialization in either or would you like
     to become a Full Stack developer?`);

let userChoiceList = "";
let userChoiceCount = 0;

while(userChoice)
{
    if(userChoiceList)
        alert(userChoiceList);

    userChoice = prompt("Is there any other technology you would like to learn? (Just press the Enter key to exit)");
    userChoiceList += `${++userChoiceCount}. ${userChoice}\n`;
}


