//sean edwards
//9/22/14
//wpf


carNumber=42;
race(7,9,10);

function race(car1,car2,car3){
    race=car1*car2/car3
    console.log("you won the race kid " + race);
}

(race < carNumber)? console.log("sorry buddie maybe next year"):console.log("great job");






/*
function functionname(parameters){ -function definition/normal function can be invoked before defined

//code the function runs
blocks of code
}


function invocation/execution/function call

functionname(arguments1,arguments2,);----making a function work/outside of curly braces-print to console


procedure-a more specific type of function/they never return values/same as function without return

variable scope-inside and outside function-functions use variables inside curly braces

parameters-Function parameters are the names listed in the function definition.

arguments-Function arguments are the real values received by the function when it is invoked.

Inside the function, the arguments are used as local variables.

returning-getting values back from a function


 calcArea(30-first parameter,20-second parameter);
function calArea(w-first,h-second){ //w=30, h=20

return calcArea;//function spitting the info out
}

var total=calcArea(30,20)-assigns function a output variable

4 types
sequential-expressions
conditional-if statements ,ternaries
reusable-dry-dont repeat yourself
repetitive-

variables-stores values
functions-store blocks of code

function types
functions -normal functions
precedures-

anonymous functions-functions created as the code is run/also called closures/have to be declared before there called/define before invoking

var functionName = function(){  -annonymous function
code to run
}

functionName();-function call


 var calcArea = function(width,height){  -annonymous function
 code to run
 }

 */
