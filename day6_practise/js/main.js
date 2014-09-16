//validating prompts

var min = (prompt("please enter a min number"));
var max = (prompt("please enter a max number"));

//test to see that a number was actually entered

if(min===""){
    console.log("you did not enter a min number");
    var min = (prompt("please enter a min number"));

}

//isNAN means not a number
// || means or
// && means and


if(isNaN(min)|| min===""){

    min=prompt("please enter a number and do not leave blank");
}

var randomNumber = Math.random()*(Number(max)-Number(min))+min;

console.log(randomNumber);

var num1 = 9.555;
console.log(num1);
console.log(Math.round(num1));
//round num1

console.log(Math.ceil(num1));
//round up

console.log(Math.floor(num1));
//round num1 down


//find a random number between 0 and 1
var num2 =Math.random();
console.log(num2);

//find a random number between and 10
var num3 = Math.random()*10;
console.log(num3);

