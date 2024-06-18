const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
    cp: "competitive programming"

}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} and the value is ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const string in programming) {
    //console.log(programming[string]);
    //console.log(`${string} and ${programming}`);
        
}

const map = new Map()
map.set('in', "india")
map.set('usa', "united states of america")
map.set('fr', "france")

for (const key in map) {
    //console.log(key);
}

