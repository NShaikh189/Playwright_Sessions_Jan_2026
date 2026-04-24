console.log(-"1"+1); //-1+1 = 0
console.log(-1+1); //0 
console.log(-"1"+"1"); //-11
console.log(-1+"1"); //-11

console.log(1.5+2);

let marks = 59;

switch(marks)
{
    case marks>90
    : console.log(">90");
    break;
    case marks>60: console.log(">60");
    break;

    case marks>30: console.log(">30");
    break;
    // default: console.log("Fail: <30");
    // break;
}

/*
switch(marks) {
  case marks > 90:
switch(marks) compares marks (a number) with each case
marks > 90 evaluates to true/false
So you're effectively doing:
case true:

👉 Now it becomes:

switch(59) {
  case true: // never matches

So no case will match.
*/

