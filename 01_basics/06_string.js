const name = "shivam "
const repoCount = 77

console.log(name + repoCount + " deepanshu");

console.log(`My name is ${name} and my repo count is ${repoCount}`);  
// `` => Backticks for string interpolation

const gameName = new String('hiteshsir-chai or code')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

// on console we get key pair value prototype and the primitive value

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)   // sub string is used for +ve index
console.log(newString);

const anotherString = gameName.slice(-8,4)  // slice is used for -ve index
console.log(anotherString);

const newStringOne = "     shivammittal     "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim simply removes the spaces in the string

const url = "https://shivammittal.com/shivam%20mittal"

console.log(url.replace('%20', '-'));  // replace is used to replace x with y

console.log(url.includes('shivam'));   // includes find the string is present or not 

console.log(gameName.split('-'))