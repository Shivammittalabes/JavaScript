function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));  // function => object => null , known as prototype behaviour
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;  // this = jis => jisne bulaya uske pass jana hai , 
}
createUser.prototype.printMe = function(){ 
    console.log(`score is ${this.score}`);  

}


// no validaton without new keyword, when used new keyword then assemble and
// create object and then inject prototype and then defined method such as (printMe, increment)
// and then create on the basis of defined function. 

const chai = new createUser("yewale full recharge", 20);
const tea = new createUser("yewale lemon tea", 30)




/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


