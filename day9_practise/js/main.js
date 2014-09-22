//random number function
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

