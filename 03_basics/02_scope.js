//  let a = 10
//  const b = 20
//var c = 300


 if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
//console.log(c);  // var is bloked scoped not global scope 


let a = 100

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);   // let is global scoped and not bloked scope


/*********************************************************************/

function one(){
    const username = "Shivam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); => error due to function scope

    //two()
}
one()


if (true) {
    const username1 = "SM"
    if (username1 === "SM") {
        const website1 = " True Love"
        console.log(username1 + website1);
    }
    //console.log(website1); => error due to block scope
}
//console.log(username1); => error due to block scope


console.log(addone(5));


function addone(num){
    return num + 1
}

// console.log(addTwo(5)); function hold  by variable

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));

