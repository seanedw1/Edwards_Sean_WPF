//random number function
/*
var min=100;
var max=220;

 var ranNum=randomizer(min,max);
console.log(ranNum)

function randomizer(mn,mx){
    var randomNumber = (Math.random()*(mx-mn)+mn);
return  randomNumber;

}

for(var i=0;i<5;i++){
 console.log(randomizer(min,max));

}
//random number function ends

//normal function
function functionName(parameters){

    //code to execute;
    //return value;
}
 //annoymous function

var functionName=function(parameters){
    //code to execute;
    //return value;
}
*/

//functionName(arguments);


//regular function
var base=10;
var height=20;
var a=triangleArea(base,height);
console.log(a);
function triangleArea(b,h){

    var area=.5*b*h;
    return area;
}

//same thing as anonymous function

var triangleA=function(b,h){
    var area=.5*b*h;
    return area;
}
var anon=triangleA(base,height);
console.log(anon);








/*this is a function
function calcAreaf(width,height) {

    var area= width* height;
    return area;
}

//this is a procedure
//just a ;ist of steps to do
function calcAreap(width*height){


}
*/