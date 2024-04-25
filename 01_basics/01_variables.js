console.log("Siddique")
// to run node filename.js
const accountId = 144553 // this the way to define constant in js ,where we cannot change the value of variable
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // it is also a one way but not recommended
let accountState;// undefined

// accountId = 2 // not allowed constant value cant be change



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
