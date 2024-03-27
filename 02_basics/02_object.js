// SINGLETON  => made with constructor, but when we declare as litrals it is not singleton
// Object.create => constructor method for creation of object


// Object literals

const mySymb = Symbol("key1")

const jsUser1 = {}

const jsUser = {
    name: "shivam",
    "full name": "Shivam Mittal",
    [mySymb]: "shivam",
    age: 23,
    location: "muzaffarnagar",
    email: "sm@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}
console.log(jsUser.name);
console.log(jsUser["email"]);  // square notation
console.log(jsUser["full name"]);
console.log(jsUser[mySymb]);

jsUser.email = "shivam@gmail.com"  // change value
console.log(jsUser.email);

// Object.freeze(jsUser)   // freeze value
jsUser.location = "gujarat"
console.log(jsUser.location);


jsUser.greeting = function(){
    console.log("hello MittalSahab");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello MittalSahab, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());




const facebookUser = new Object()

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "smart"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            fisrtname: "shivam",
            lastname: "mittal"
        }
    }
}

console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.fisrtname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
//console.log(obj3);   // object under an object


const obj4 = Object.assign({}, obj1, obj2)
//console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

const users = [
    {
        id: 1,
        email: "sm@gmail.com"
    },
    {
        id: 2,
        email: "smsm@gmail.com"
    },
    {
        id: 3,
        email: "sms@gmail.com"
    }
]

users[2].email


console.log(Object.keys(tinderUser)); // object convet into array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // property or key exist or not in the object or database
console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "JavaScript",
    price: 999,
    course_instructor: "hitesh"
}

console.log(course.course_instructor);


// DESTRUCTUREING:-
const{course_instructor: teacher} = course  //  change key but have same value
console.log(teacher);