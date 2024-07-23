// fuction : block of coe used to do particular tasks

//---------------------------------
// function greet(name:string) {
//     return `hello ${name}`;

// }
// console.log(greet("jack"));

//---------------------------------

// function addNumber(num1 :number, num2 :number) {
//     const sum = num1 + num2;
//     console.log("sum: " + sum);
    
// }
// // function ko call krte waqt argument provide krna 
// addNumber(5,3); // 5 and 3 are arguments

//----------------------------------------

// function cal (a :number, b : number, c : number, d : number){
//     return a + b * c - d;
// }
// console.log(cal(4,6,2,7));

//----------------------------------------
// function login(username:string , password:any) {
//      return ` your username is : ${username}  and password is : ${password}`;
// }
// console.log(login("jack" , 12234));

//-----------------------------------------
// generate table 
// by using console.log
// function table (num: number = 4){
//     console.log(num + " X 1 = " + num * 1);
//     console.log(num + " X 2 = " + num * 2);
//     console.log(num + " X 3 = " + num * 3);
//     console.log(num + " X 4 = " + num * 4);
//     console.log(num + " X 5 = " + num * 5);
//     console.log(num + " X 6 = " + num * 6);
//     console.log(num + " X 7 = " + num * 7);
//     console.log(num + " X 8 = " + num * 8);
//     console.log(num + " X 9 = " + num * 9);
//     console.log(num + " X 10 = " + num *10);
    
// }
// table(2);
// console.log("  ------- ");
// table(3);


// -------------------------------------------
// function greet(name:string) {
//     return `Assalam O Alaikum ${name}`;
// }
// console.log(greet("jack"));

// -------------------------------------------
function greet(name:string = "bro ") {
    console.log("Assalam O Alaikum " +name);
    return name; // caller
}
let username = "aliyan" //callE
greet(username)
console.log(username+ " is my friend");
console.log(username+ " lets meetup");

//--------------------------------
// function login(age:number = "sorry age is required") {
//     console.log("your age is " + age);
//     return age; 
// }
// let age = 23 

// login()
// console.log(age);


