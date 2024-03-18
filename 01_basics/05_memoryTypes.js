// types of memory

// 1 stack:

// => all the primitive data type uses the stack memory.
// => we get the copy, value of variable 

let myName = "shivam@gmail.com"

anotherName = myName
anotherName = "shibhu"

console.log(myName);
console.log(anotherName);






// 2 heap:

//=> all the non-primitive data type uses the heap memory.
//=> we get reference of original Value.


let userOne = {
    email: "user@gmail.com",
    id: "userOne@ubl"
}

let userTwo = userOne

userTwo.email = "shivam@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
