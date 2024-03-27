// ARRAY

const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, "shivam", "deepanshu")

const myheros = ["hanuman", "shiv", "krishna"]



console.log(myArr);
console.log(myheros);
console.log(myArr2);
console.log(myheros[0]);  // access the element of array


// Array Methods:

myArr.push(6)   // add an element in array
myArr.push(7)  
console.log(myArr);

myArr.pop()  //  remove an element in array
console.log(myArr);

myArr2.unshift(9)  // insertion an element at starting position
console.log(myArr2);

myArr2.shift()
console.log(myArr2); //  deletion of an element at starting position

console.log(myheros.includes(9)); // find the element is present or not
console.log(myheros.includes("shiv"));


console.log(myheros.indexOf("krishna")); // find the index value of the element

const newArr = myArr.join()  // bind the array and covert into string 

console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));


// SLICE AND SPLICE

console.log("A ",myArr);
const myn1 = myArr.slice(1,3); // it does not manipulate the real array 
console.log("A ",myn1);
console.log("A ",myArr);



console.log("B ",myArr);
const myn2 = myArr.splice(1,3); // it manipulate the original array 
console.log("B ",myn2);
console.log("B ",myArr);


/************************************************************************** */


const marvel_heros = ["caption_america", "thor", "ironman", "spiderman", "captain_marvel"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros)
console.log(marvel_heros); // array under an array but as an element

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const anotherArr1 = anotherArr.flat(3);
console.log(anotherArr1);

console.log(Array.isArray("shivam"));
console.log(Array.from("shivam"));
console.log(Array.from({name: "shivam"}));  //  study further 



let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of( score1, score2, score3, score4));



