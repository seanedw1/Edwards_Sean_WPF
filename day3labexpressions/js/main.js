//sean edwards 9/8/14 web programing fundamentals section 00 expressions

//problem 1

var sliceperpie=10; //slices of pizza
var peopleatparty=6; //number of people at party
var pizzasordered=2; //numbers of pizza's ordered

var slicesofpizza= pizzasordered*sliceperpie/6;

console.log ("each person ate" +" "+slicesofpizza+" "+"slices at the party.");

//part 2

var Sparky=(slicesofpizza-3.0)*peopleatparty;

console.log("Sparky got"+" "+Sparky+" "+"slices of pizza");

//sparky get x slices
//



//problem 3

var week1=100.00;
var week2=121.00;
var week3=90.00;
var week4=150.00;
var week5=115.00;


var totalamount=week1+week2+week3+week4+week5;
var averageamount=totalamount/5;

console.log("You have spent a total of" + totalamount + "on groceries over 5 weeks. That is an average of " + averageamount + "per week");



//discount

var orignalprice=59.00;
var discountedpercentage=0.5;
var salestax=0.07*orignalprice;
var item=("car detail");



var itemwithtax=orignalprice+salestax;
var itemwithouttax=orignalprice-salestax;

console.log("Your item was originally" + orignalprice + "but after a" + discountedpercentage + "discount, it is now $" + itemwithouttax + "without tax, and" +itemwithtax+ "with tax.”");