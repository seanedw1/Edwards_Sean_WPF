//arguments and parameters
//arguments - goes into function
//parameters- catches the arguments in the function

//allows us to make our code more flexible

var width=10;
var height=10;
//call the function and pass in arguments
calcArea(width,height);

//create function and pass arguments into parameters.
function calcArea(w,h){
    var area =w*h;
    console.log(area);

    return area;
}
var funcResults=calcArea(20,20);
//run the function again
console.log(funcResults);


function humanDog(humanAge,dogAge){
    var humanAge=24;
     var dogAge=humanAge*7;
    console.log("you are "+humanAge+ " in human age and " +dogAge+ " in dog age.")

}
humanDog();