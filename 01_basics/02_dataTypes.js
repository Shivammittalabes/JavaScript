"use strict"; 
// treat all JS code as newer version


// alert( 3+3 ) 
//we are using nodejs, not web browser [{ DC39, MDN }]
// Code readability should be high

let name = "Shivam" // String
let age = 18  // Number
let isLoggedIn = true //Boolean


// Number => 2^53
// bigint => for large no
// string = ""
// Boolean => true/false
// null => stand alone value {representation of empty value}
// undefined => value is not defined
// symbol => for finding the uniqueness of component

// object

console.log(typeof "shivam");
console.log(typeof age);

console.log(typeof null);
console.log(typeof undefined); 

// master plan => js object & browser web events

/* 
Primitive datatype {call by value} :
7 types - string , number, boolean, null, undefined, symbol, bigint.

Non primitive datatype {call by reference} :
array, objects, functions
 
*/ 

const id = Symbol("123")
const anotherId = Symbol("123")

console.log( id === anotherId);

const bigNumber = 98985454885n

const heros = [ "shaktiman", "hanuman", "friends"];

let myObj = {
    name: "shivam",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}