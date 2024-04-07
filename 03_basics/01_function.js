
// function myName(){
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("V");
//     console.log("A");
//     console.log("M");
// }

// myName()


// function addTwoNumbers(number1, number2){  // parameters => number1, number2
//     console.log(number1 + number2);
// }
// addTwoNumbers(6, 7) // argument => 6,7


const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}


function userLoggedMessage(username){
    if(username === undefined){  // = (!username)
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(userLoggedMessage("SM"));

function userLoggedMessage1(username){
    if(username === undefined){  // = (!username)
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(userLoggedMessage1(""));

/***************************************************************************/

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 400, 500, 700, 800));


function calculateCartPrice1(...num2){  // rest operator or spread operator
    return num2 
}
console.log(calculateCartPrice1(100, 200, 400, 500, 700, 800));


const user1 = {
    username: "Shivam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and The Price is ${anyobject.price}`);
}
// handleObject(user1)

handleObject({
    username: "SM",
    price: 399
})

const myNewArray = [200, 500, 700, 900, 300]

function returnAnyValue(getArray){
    return getArray[2]
}
console.log(returnAnyValue(myNewArray));
console.log(returnAnyValue([200, 500, 700, 900, 300]));