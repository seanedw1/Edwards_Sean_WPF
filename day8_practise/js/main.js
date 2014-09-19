 var fruit=["apple","orange","kiwi","pear","cucumber","pomegranate","apple"];
 var totalFruit=0;



 for(var i=0;i<fruit.length;i++){

     if(fruit[i]==="apple"){
         totalFruit++;
     }
     //console.log("fruit="+totalFruit);


 }
 console.log(totalFruit);

 //wrong var myvar = my function
 // right var myvar = myfunction();
 //function call funcName (argument1,argument2);
 //function funcName(parameter1,parameter2){
 //code the function runs
 //}

 //function call or invoked
 //must be called or it will not run

function printHello(){
    console.log("hello world!");
}

 function printMore() {
     console.log("prints out more text!");

 }

 printHello();
 printMore();

calcArea();

//variable scope
//var width=20;
 //var height=10;

function calcArea(){

    var width=30;
    var height=10;
    var area= width * height;

     console.log(area)
}
 console.log(width);