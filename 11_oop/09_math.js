const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

// const mynewObject = Object.create(null);

const shivam = {
    name: "yewale chai",
    price: "50",
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(shivam, "name"));

Object.defineProperty(shivam, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(shivam, "name"));

for (let [key, value]  of Object.entries(shivam)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
    
    
}