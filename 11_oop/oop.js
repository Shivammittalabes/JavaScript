const user = {
    username: "shivam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got User details from database");
        console.log(`username: ${this.username}`);
        console.log(this);  // this is used for current context // work as object
    }
}

console.log(this);
console.log(user.username);
console.log(user.getUserDetails());


function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Shivam_sm", 12, true) // new keyword create empty object  new instance 
const userTwo = new User("SM@sm", 11, false)
console.log(userOne);
console.log(userTwo);  


