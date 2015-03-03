/*
  sean edwards
  9/17/14
  loops worksheet
 */

var whoWillDie = prompt("who do u think will die next on the walking dead?");

var walkingDead=["rick","shane","carl","lori","daryl","the governor","michonne"];
var i = 0;

while(walkingDead){
    console.log("i think" +walkingDead[i]+ "will be next" );
    i++;
    if(i >= walkingDead.length){
        walkingDead = false;
    }
}


/*



in great design the beauty is in what you dont see-mark kawano


while loops-looks similar to conditional

var b=50; //setup the index

while(b>0){ //checks the condition
console.log(b+"dwqm");
b--; //increments or decrements the index
}

while(condition){action to run}


do while loop
 var c-10;

 do{console.log(c+'kegs on the wall');//code runs before condition can determine if its true/if false code still runs

 }
while(c>0);


for loop-short hand version of all loops put together


for(var i=10 //sets variable ; i > 0 ; i-- //increments or decrements){
console.log(i+"kegs on the wall");
}





 */