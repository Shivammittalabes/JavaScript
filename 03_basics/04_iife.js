// Immediately Invoked Function Expression (IIFE)


function chai() { // named iife
    console.log(`SM1 Connected`);
}
chai();

(function chai1() {  // for prevention from global scope  => ()()
    console.log(`SM2 Connected`);
})();

((username) => { // unnamed iife
    console.log(`SM3 Connected ${username}`);    
})("shivam");