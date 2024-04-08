// this keyword in object

const user = {
    username: "Shivam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); 
        //O/P =>  this keyword is used for accessing the variables in the scope and refering the current context in the scope.

        console.log(this);

    }

}
// user.welcomeMessage()

user.username = "SM"
//user.welcomeMessage()


// this keyword in global
console.log(this);  // O/P => empty object =>{}, but in browser O/P => window


/* this keyword in fuction

function sm(){
    let username1 = "Shivam"
    console.log(this.username1);
}
sm()
this keyword is not working in the function

const username2 = function() {
    let username1 = "Shivam"
    console.log(this.username2);
}
username2() */

const username2 = () =>  {  // arrow function () => {}
    let username1 = "Shivam"
    console.log(this);
}
username2()

const addTwo = (num1, num2) => {     // explicit return
    return num1 + num2
}
console.log(addTwo(4, 5));

const addTwo1 = (num1, num2) => num1 + num2    // implicit return
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo1(4, 5));
console.log(addTwo2(4, 4));

const addTwo3 = (num1, num2) => ({username: "shivam mittal", age: 23}) // method wrap in parenthesis bracket for implicit return
console.log(addTwo3(4, 4));



