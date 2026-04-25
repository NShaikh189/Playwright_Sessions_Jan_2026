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


// if(abc())
//     console.log('Hi');
// else
//     console.log('Hello');

let num =100;

(num>10) ? console.log('eligible'):console.log('not ele');;
//console.log(bill);

let numarr = [10,20,30,40];
for(let k of numarr)
{
    let cnt = numarr.length - numarr.indexOf(k)-1;
    console.log(numarr[cnt]);
    cnt--;
}
let cnt = 0;
let len = numarr.length-1;
// for(let k of numarr)
// {
//     console.log(numarr[len-cnt]);
//     cnt++;
// }


for(let q in numarr)
{
    console.log(numarr[len-q]);
}
for(let i = 0; i<numarr.length;i++)
console.log(numarr[i]);

numarr.push(89);
console.log(numarr);
let pop = numarr.pop();
console.log(pop);

numarr.shift();

for(let e of numarr)
{
    console.log(e);
}

for(let e in numarr)
{
    console.log(e, numarr[e]);
}


numarr.push('hellp');

console.log(numarr);

let fruits = ['apple','grapes','banana','cherry'];
console.log(fruits);
fruits.splice(0,2);
console.log(fruits); // banana, grapes
fruits.splice(0,1,'watermelon');
console.log(fruits);//watermelon, grapes
fruits.splice(0,0,'avacado');
console.log(fruits);//avacado, watermelon, grapes
fruits.splice(2,0,'orange');
console.log(fruits);//avacado, watermelon, orange, grapes
fruits.splice(1,1,'papaya');
console.log(fruits);
fruits.splice(1,1,'chiku','berries','dragonfruit');
console.log(fruits);


// fruits.splice(0,4,['avacado']);
// console.log(fruits);

let val = [1,2,3,4,1,5,6,7,7,2,1];
console.log(val.indexOf(1));
console.log(val.indexOf(2));
console.log(val.indexOf(1, val.indexOf(1)+1));

let fruitArr = ['apple','grapes','banana','apple','cherry', 'apple'];
console.log(fruitArr.indexOf('apple'));
console.log(fruitArr.indexOf('apple', fruitArr.indexOf('apple')+1));
console.log(fruitArr.indexOf('apple', fruitArr.indexOf('apple', fruitArr.indexOf('apple')+1)+1));