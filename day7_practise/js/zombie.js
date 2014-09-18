/**
 * Created by seanpro on 9/17/14.
 */

//zombie madness
//we have a zombie here at school
//it can bite 4 people a day and turn them into zombies
//the cdc wants to know how many zombies there will be in 8 days?

var numZombies=1; //intial number of zombies
var numBites=4; //number of bites per zombie
var days=8; //total number of days

for(var i=1; i<=days; i++){

    var newZombies = numZombies*numBites;
    //start with original z times bites
    numZombies = numZombies + newZombies;
    // number of zs is original z + new

        console.log("there are " + numZombies + " zombies on day #" +i+ "!");
}


//cycle through array using for loop
var names=["scooby","shaggy","velma","fred","daphne"];

//loop through array

for(var i=0;i<names.length; i++){


    console.log("you solved the case, " +names[i]+ "!")

}