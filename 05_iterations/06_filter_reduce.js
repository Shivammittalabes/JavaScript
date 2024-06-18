/*************************FOR EACH********************************/

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => { // => foreach didn't return any values
    //console.log(item);
    return item
})

/*****************************MAP*************************************** */

//console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if ( num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: "Book One", genre: "fiction", publish: "1981", edition: 2004 },
    { title: "Book two", genre: "non-fiction", publish: "1992", edition: 2008 },
    { title: "Book three", genre: "history", publish: "1999", edition: 2007 },
    { title: "Book four", genre: "non-fiction", publish: "1989", edition: 2010 },
    { title: "Book five", genre: "science", publish: "2009", edition: 2014 },
    { title: "Book six", genre: "fiction", publish: "1987", edition: 2010 },
    { title: "Book seven", genre: "history", publish: "1986", edition: 1996 },
    { title: "Book eight", genre: "science", publish: "2011", edition: 2016 },
    { title: "Book nine", genre: "non-fiction", publish: "1981", edition: 1989 }
];

let userBooks = books.filter( (bk) => bk.genre === "history" )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "history"
} )

//console.log(userBooks); 


//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumbers = myNumbers.map( (num) => num + 10 )
//console.log(newNumbers);


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // if you open the scope you have to return the value

// const newNumbers = myNumbers.map( (num) => {return num + 10} )
// console.log(newNumbers);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining Property

//const newNumbers = myNumbers.map().map().filter() ie:

// const newNumbers = myNumbers
//                     .map( (num) => num * 10)
//                     .map( (num) => num + 1 )
//                     .filter( (num) => num >= 40)
// console.log(newNumbers);


const newNumbers = myNumbers
                    .map( (num) => {return num * 10} )
                    .map( (num) => {return num + 1} )
                    .filter( (num) => {return num >= 40} )
//console.log(newNumbers);

/****************************REDUCE***********************************/


// const myNumbs = [1, 2, 3, 4]

// const myTotal = myNumbs.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0) 

// console.log(myTotal);


//const myNumbs = [1, 2, 3, 4]

//const myTotal = myNumbs.reduce( (acc, curval) => acc + curval ,0) 

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "javascript",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "android",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);