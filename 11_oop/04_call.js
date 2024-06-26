function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called");

}

function createUser(username, email, password) {
    setUserName.call(this, username)
   
    this.email = email
    this.password = password
    
}

const Deepanshu = new createUser("deepanshu", "deepanshu@gmail.com", "7060");
console.log(Deepanshu);