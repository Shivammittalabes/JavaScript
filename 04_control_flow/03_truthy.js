const userEmail = ["Shiv@gmail.com"]

if (userEmail) {
    console.log("have user mail");
} else {
    console.log("dont have user mail");
}

// falsy values

// => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// => true, "0", 'false', " ", [], {}, function() {}, 

const humanEmail = []

if (humanEmail.length === 0){
    console.log("array is empty");
}

const empObj = {}

if (Object.keys(empObj).length === 0) {
    console.log("object is empty");
}