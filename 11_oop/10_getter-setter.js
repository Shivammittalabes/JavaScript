// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get email() {
//         return this._email.toUpperCase()
//     } 

//     set email(value){
//         return this._email = value
//     }


//     get password(){
//         return `${this._password}shivam`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const shivam = new User("shivam@gmail.com", "abc")
// console.log(shivam.password);
// console.log(shivam.email);


/************GET & SET THROUGH PROPERTIES**************/
//              FUNCTION BASED



// function User(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },


//         set: function(value){
//             this._email = value
//         }
//     })


//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },


//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const shivam = new User("shivam@gmail.com", "1234abc")
// console.log(shivam.email);
// console.log(shivam.password);


/************GET & SET THROUGH PROPERTIES**************/
//              OBJECT BASED


const User = {
    _email: "shivam@gmail.com",
    _password: "abc123",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}



const shivam = Object.create(User)
console.log(shivam.email);
console.log(shivam.password);