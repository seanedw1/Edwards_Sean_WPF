//sean edwards
//9/19/14
//wpf

var radius=90;
var pi=3.14;
var result = calcCircumference(radius,pi);

function calcCircumference(r,p){

    var circumference=r*p;

    //console.log(circumference);

    return circumference;

}

console.log(result);




//second one

function calcStings(weight,stingsperpound) {

    var totalStings=weight*stingsperpound;
    console.log(totalStings);

    return totalStings;
}
var funcResult=calcStings(80,8.666666667);
// run the function again
console.log(funcResult);


