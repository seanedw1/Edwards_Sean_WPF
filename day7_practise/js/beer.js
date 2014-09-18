//create loop that makes the song 99 bottles of beer on the wall.
//until there are no more

for(var i=99;i>0;i--){

 //   console.log(i);
    console.log(i +" bottles of beer on the wall " +i+ " bottles of beer");

    //console.log("take one down,pass it around "+(i-1)+" bottles of beer");


    if(i===1){

        console.log("take one down,pass it around no more bottles of beer! the end")
    }else{ console.log("take one down,pass it around "+(i-1)+" bottles of beer "+"on the wall");

    }

}