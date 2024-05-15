// Control Statement 
// Comaparison => <, >, =, <=, >=, !=, ===, !==.

// if or if-else statement

// const temp = 30
// if (temp === 30){
//     console.log("less then 51");
// }

const temperature = 51
// if (temperature === 41){
//     console.log("less then 50");
// }
// else{
//     console.log("greater then 50");
// }


const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

//const balance = 1000 // Implicit Scope

// if(balance > 500)  console.log("test"),
// console.log("test2");

// Nesting Statement

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
// }

// And and OR logical Operator 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromMail = false

if (userLoggedIn && debitCard && 2==2){
    console.log("allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromMail){
    console.log("user logged in");
}

// Nullish Coalescing operator (??): null, undefined

let value1;

//value1 = 5 ?? 10
//value1 = null ?? 10
//value1 = undefined ?? 10
value1 = null ?? 10 ?? 20

console.log(value1);

// Ternary Operator

// condition ? true : false

const iceTea = 100

iceTea <= 80 ?  console.log("less than 80") : console.log("more than 80");

iceTea >= 80 ?  console.log("less than 80") : console.log("more than 80");