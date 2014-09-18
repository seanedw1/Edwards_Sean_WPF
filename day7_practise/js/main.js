
    //initializing the counter variable
var counter = 0;


//starting the while loop with condition
//while condition is true, loop will run
//when condition is false,loop stops


while(counter<200){

    console.log("counter is counting");
    counter++;//counts until condition is false

}






//do while loops
//the do/while loop is  variant of the while loop.
//this loop will execute the code  before checking if
// the condition is true
//then it will repeat the loop as long as the condition is true



var i =0;
//set a variable to hold our value

do{
    console.log("the number is"+i);
    i++;
}

while(i<10);



//basic for loop
// for (intializing condition increment of change)
//we use i frequently because it stands for iteration

for(var i=0;i<20;i+=4){
//for loop intializes the variable i set a condition
//i is less than 20 and adds increments of change +4
    console.log("i="+i)
    //show the value of i
    //runs as long as i is less than 20

}
//break
for(var j=0;j<5;j++){

    if(j===2)
    {
        break;//stops the loop from cycling
    }
    console.log("j="+j);

}