// data type -> number, string
const a = 5;
const b = 2;
let myName = "getAjob";
const employed = false;
const amIfat = null;
let something;

// constant(basic) -> variable / can not change 
// let(special) -> variable / can change


// var -> Don't have any oher rules(never use)
// let -> create variable
// null -> nothing, Something doesn't exist in here (In python, has None) c
// undefined -> something, does not have value  

// array (have a data list in a variable)
// use [] from beginning to end,ALl this array should be seperated by comma
// get item from array
// add one more day to the array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];

const toBuy = ["potato", "beer", "Red pen"];
toBuy.push("battery");
console.log(toBuy[3]);  

// Object
const playerName = "getAjob";
const playerPoints = 2000;
const playerHandsome = false;
const playerFat = "little bit";

const player1 = ["getAjob", 2000, false, "little bit"];    // don't know which object it is 

const player = {
    name: "MustGetAjob",
    points: 10,
    fat: true,
};
// In object, we use : instead of =

console.log(player);
player.lastName = "EscapeKorea" // add
player.points = player.points + 20;     // update
console.log(player);
console.log(player.name);
console.log(player["name"]);

// Functions (we execute function over and over )
function getAjob1(nameOfPerson, num){
    console.log("My Goal is" + nameOfPerson + "until" + num); // execute data when you execute
}
// argument --> How to send some information to a function while it's running??
// send a data
getAjob1("losing a weight", 75);
getAjob1("buying the perfume", 7);
getAjob1("achieving TOEIC 700 points on", 700)

// How to receive Data
function sayHello() {

}

const player2 = {
    name: "IT_developer",
    sayHello: function(otherPersonName)    {
        console.log("Hello!! " + otherPersonName + " Get yourself together!!!");
    },
};

console.log(player2.name);
player2.sayHello("NotAsleep");


// simple Calculator
function plus(num1, num2) {
    console.log(num1 + num2);
}

function divide(num3, num4) {
    console.log(num3 / num4);
}

plus(8, 60);
divide(65, 10);
/* Calculator end */

/* ==================================<console page>============================================ */

console.log(daysOfWeek);
console.log(daysOfWeek[3]); // get Item from Array

daysOfWeek.push("getAjob")   // add one more day to the array
console.log(daysOfWeek);



console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log("Hello " + myName);

myName = "MustEscape";

console.log("your new name is " + myName);
console.log(employed);
console.log(amIfat);
console.log(something);
