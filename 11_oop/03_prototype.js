// let myName = "Shivam     "
// let fullName = "Mittal     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.shivam = function(){
    console.log(`shivam is present in all objects`);
}
heroPower.shivam();
myHeros.shivam();

Array.prototype.heyShivam = function(){
    console.log(`shivam is present in all arrays`);
}
myHeros.heyShivam();
// heroPower.heyShivam();  // not allowed

/********************************/

/*************INHERITANCE*******************/


const User = {
    name: "Shivam",
    email: "Shivam2K@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: "true",
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Deepanshu Saini"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Aashish saini".trueLength()
"Shivam Mittal".trueLength()
