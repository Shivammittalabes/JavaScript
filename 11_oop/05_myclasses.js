// ES 6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const shivam = new User("shivam", "shivam@gmail.com", "123");
console.log(shivam.encryptPassword());
console.log(shivam.changeUserName());


/******************************************************/ 


function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const sanjana = new User("sanjana", "sanjana@gmail.com", "123");

console.log(sanjana.encryptPassword());
console.log(sanjana.changeUserName());

