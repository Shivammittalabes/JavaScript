let score = 33
let score1 = "33abc"
let score2 = null

console.log(score);
console.log(typeof score);
console.log(score1);           // string
console.log(typeof (score1));  // method
console.log(score2);           // null
console.log(typeof score2); 

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);

console.log(valueInNumber); //not a number in reality

let valueInNo = Number(score2)
console.log(valueInNo);
console.log(typeof valueInNo);

//typeof 
//null => object, Number, 0
//undefined => undefined, Number, NaN
//boolean => boolean, Number, 1(true)


// 33 => 33
// "33abc" => NaN
// true => 1 ; false => 0 ; "" => false ; "shivam" => true

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)


console.log(stringNumber);
console.log(typeof stringNumber);



// *********************OPERATION*************************


let value = 3
let negvalue = -value

console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);


let str1 = "HELLO"
let str2 = " SHIVAM"

let str3 = str1 + str2  // Concatination property
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3" + 4);

console.log(+true); // messy code
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2+2

let gameCounter = 100  // prefix and postfix ie { ++X & X++ }
gameCounter++;
console.log(gameCounter);

