let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


let myCreatedate = new Date(2023, 0, 23)
let myCreatedates = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedate);
console.log(myCreatedate.toLocaleString());
console.log(myCreatedates.toLocaleString());



/*************************    TIME     ******************* */

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.toLocaleString());
console.log(myCreatedate.getTime());