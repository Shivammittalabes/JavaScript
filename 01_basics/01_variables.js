const accountId = 706095
let accountEmail = "shivam@gmail.com"
let accountState;
var accountPassword = "706095"
accountCity = "Jaipur"



// accountId = 2  // not allowed

accountEmail = "sm@gmail.com"
accountPassword = "99118822"
accountCity = "Bengalore"

console.log(accountId);

/*
we should not use var because the issue of SCOPE
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
    