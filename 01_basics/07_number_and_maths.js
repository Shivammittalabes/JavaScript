const score = 400
//console.log(score);

const balance = new Number(100)  // typecasting
//console.log(balance);

//console.log(balance.toString()); // convert into string by method
//console.log(balance.toFixed(2)); // for fixing the values like 100.00

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4)); // for precising the value like 123.9

const numbers = 10000000
//console.log(numbers.toLocaleString()); // it provide the (,) based on US standard  
//console.log(numbers.toLocaleString('en-IN')); 




/****************************     MATHS     *******************************/

// console.log(Math);

// console.log(Math.abs(-4)); // it convert -ve value into +ve value

// console.log(Math.round(4.3)); // provide round off value
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2)); // it always provide upper value

// console.log(Math.floor(4.9)); // it always provide lower value

// console.log(Math.min(9,5,3,6,7)); // find lowest value

// console.log(Math.max(2,6,7,9,8,4)); // find highest value

console.log(Math.random()); // random value lie b/w 0 and 1

console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


 
