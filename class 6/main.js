// if and if-else statements
// ----------------------------------------------------------------
// let age : number = 4;
// if (age>=18) {
//     console.log("you are eligible ");
// } else {
//     console.log("sorry you are not eligible");
// }
// let password : number = 1234;
// if (password == 1234) {
//     console.log("welcome ");
// } else {
//     console.log("sorry wrong password");
// }
//----------------------------------------------------------------
// let markSheet : number = 90 ;
// if (markSheet >= 90) {
//     console.log("you got A-One grade ");
// } else if(markSheet >= 80) {
//     console.log("you got A grade ");
// }
//  else if(markSheet >= 70) {
//     console.log("you got B-One grade ");
// }
//  else if(markSheet >= 60) {
//     console.log("you got B grade ");
// }
//  else if(markSheet >= 50) {
//     console.log("you got C grade ");
// }
// else{
//     console.log("Sorry you are fail");
// }
//----------------------------------------------------------------
// let weather : number =80;
// if (weather >= 32 && weather <=40) {
//     console.log("HOT WEATHER");
// } else if(weather <= 32 && weather >= 0) {
//     console.log("NORMAL WEATHER ");
// }
//  else if(weather <=0) {
//     console.log("COLD WEATHER ");
// }
// else{
//     console.log("invalid weather");
// }
//----------------------------------------------------------------
// CONDITIONAL TERNARY OPERATPRS :
// let isGuest = true;
// let refreshment = isGuest ? "tea " : "black coffee";
// console.log(`welcome to home  have some ${refreshment}`);
//----------------------------------------------------------------
//SWITCH CASE : 
// let dayoff = "sunday "
// switch (dayoff) {
//     case "saturday":
//         console.log("lets watch amovie");
//         break;
//     case "sunday":
//         console.log("do coding ");
//         break;
//     case "monday":
//         console.log("watch a vlog");
//         break;
//     default:
//         console.log("invalid");
//         break;
// }
// ----------------------------------------------------------------
// let class_timing = "tuesday"
// switch (class_timing) {
//     case "monday":
//         console.log("go to your college");
//         break;
//     case "tuesday":
//         console.log("take a sick leave ");
//         break;
//     case "sunday":
//         console.log("go to your class");
//         break;
//     default:
//         console.log("invalid");
// }
var operator = "+";
switch (operator) {
    case "+":
        console.log("additional operator");
        break;
    case "-":
        console.log("subtraction operator");
        break;
    case "*":
        console.log("multiplication operator");
        break;
    case "/":
        console.log("division operator");
        break;
    default:
        console.log("invalid operator");
        break;
}
