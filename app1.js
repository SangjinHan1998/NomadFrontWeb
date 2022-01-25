const toDo = ["python", "css", "html"];

console.log(toDo);
toDo[2] = "exercise";
console.log(toDo);
toDo.push("JavaScript") // add data
console.log(toDo);

const player = {
    name: "patience",
    age : 25,
};

console.log(player)
player.name = "nicolas" 
console.log(player);
player.eating = "no"
console.log(player);

// 9~12 function execute -> 15 change data -> 16 print function player -> 17 add data -> 18 print function player

function minusFive(potato) {   // input data this -> ()
    console.log(potato - 5);
}

minusFive(5, 10, 12, 34, 3, 5, 7, 10);  // potato only receive first 

const calculator = {    
    add: function (a, b)     {
        return a + b;
    },
    min: function (a, b)     {
        return a - b;
    },
    mul: function (a, b)  {
        return a * b;
    },
    div: function (a, b)  {
        return a / b;
    },
    power: function (a, b)  {
        return a ** b;
    },
}

const addResult = calculator.add(10,4);
const minResult = calculator.min(addResult, 4);
const mulResult = calculator.mul(10, minResult);
const divResult = calculator.div(mulResult, addResult);
const powerResult = calculator.power(divResult, minResult);


console.log(addResult);
console.log(minResult);
console.log(mulResult);
console.log(divResult);
console.log(powerResult);


calculator.min(10,4);
calculator.mul(10,4);
calculator.div(10,4);
calculator.power(10, 4);

const age = 96;
function calculateKrAge(ageOfForeigner) {
   return ageOfForeigner + 2;
   return "hello";
}




console.log()