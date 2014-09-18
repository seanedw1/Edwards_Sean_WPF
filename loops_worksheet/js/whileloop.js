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