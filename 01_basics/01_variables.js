const AcccountId = 232862;
let AccountEmail = "krishagarwal498@gmail.com";
var AccountPass = "1234";
let accountcity = "jaipur";
let accountName;

AccountEmail = "krish@gmail.com";
AccountPass = "14";
accountcity = "bengaluru";

// const AcccountId = 2; // can't change const
console.log(AcccountId);


console.table([{AccountPass, AccountEmail, accountcity, accountName}]);
console.table([AccountPass, AccountEmail, accountcity, accountName]);


// dont use var for declaration of variable because there is an issue of block scope and functional scope
  

// use const for constable and let for variable
