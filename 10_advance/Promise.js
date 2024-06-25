const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task is Completed');
        resolve();
    }, 1000)
});
// do an async task
// DB calls, cryptography, network

promiseOne.then(function(){
    console.log('Promise Consumed');
});

/******************************************/

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task2 is Completed");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Promise2 Consumed");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shivam", email: "shivammittal.2k@gmal.com"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  // true
        if (!error) {
            resolve({username: "Shivam_sm", password: "SM@SM"});
        } 
        else {
            reject("ERROR: Something went Wrong");
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected"));



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true  // false
        if (!error) {
            resolve({username: "Sm_Sm", password: "SM@SM"});
        } 
        else {
            reject("ERROR: Sm went Wrong");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Error resolved or rejected");
})