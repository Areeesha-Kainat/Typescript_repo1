//   concatenation :
// let myName : string = "jack";
// let myAge :number = 18 ;
// let result : any = "my name is " + myName + " " + "my age is "+ " " + myAge;
// console.log(result);
// template literals :
// 
// let myname : string = "jack";
// let myage :number = 18 ;
// let details : any = `my name is  ${myname}  and my age is ${myage}`;
// console.log(details);
// also print direct on console log :
var myName = "jack";
var myAge = 18;
// let result : any = "my name is " + myName + " " + "my age is "+ " " + myAge;
console.log("my name is ".concat(myName, " and my age is ").concat(myAge));
