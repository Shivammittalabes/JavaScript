class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New Course is added by ${this.username}`);
    }
}

const shivam = new Teacher("shivam", "shivam@gmail.com", "1234");
shivam.addCourse()

const deepanshu = new User("deepaanshu")
deepanshu.logMe()