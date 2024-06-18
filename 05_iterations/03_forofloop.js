// for of loop

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    //console.log(`each character is: ${greet}`);
}

//maps => o/p values in same order and unique

const map = new Map()
map.set('in', "india")
map.set('usa', "united states of america")
map.set('fr', "france")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-' ,value);
    
}
for (const key of map) {
    //console.log(key);

}

const myObject1 = {
    'game1': "nfs",
    'game2': "spiderman",
    'game3': "igi"
} 
const myObject2 = {
    game1: "nfs",
    game2: "spiderman",
    game3: "igi"
} 

for (const [key, value] of myObject1) {
    //console.log(key, ':-' ,value);
    
}
for (const [key, value] of myObject2) {
    //console.log(key, ':-' ,value);
    
}

