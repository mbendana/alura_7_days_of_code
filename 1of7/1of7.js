// All the following examples return true
//
// console.log(false == "0");
// console.log(null == undefined);
// console.log(" \t\r\n" == 0);
// console.log(" " == 0);
//
// The task is to rewrite the following code to
// print correct information that makes sense
// and has no mistakes
//
let numberOne = 1;
let stringOne = "1";

let numberThirty = 30;
let stringThirty = "30";

let numberTen = 10;
let stringTen = "10";

if ((numberOne == stringOne) && ! (numberOne === stringOne))
{
    console.log("The variable numberOne and stringOne have the same value",
                "but different types");
}
else
{
    console.log("The variables number One and stringOne don't have the same value");
}

if ((numberThirty == stringThirty) && ! (numberThirty === stringThirty))
{
    console.log("The variable numberThirty and stringThirty have the same value",
                "but different types");
}
else
{
    console.log("The variables number Thirty and stringThirty don't have the same value");
}

if ((numberTen == stringTen) && ! (numberTen === stringTen))
{
    console.log("The variable numberTen and stringTen have the same value",
                "but different types");
}
else
{
    console.log("The variables number Ten and stringTen don't have the same value");
}


