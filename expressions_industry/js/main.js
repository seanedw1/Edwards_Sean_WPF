//sean edwards
//9/10/14
//wpf section 0

alert("calculate the correct amount of space needed content based on css box model");

var marginSize=prompt("how much of a margin is used");
var paddingSize=prompt("how much padding is used");
var borderSize=prompt("size of border");
var contentsize=prompt("how many px size will be needed for your content space");
alert("you will need a total of" + pxNeeded + "to have the correct px");


var margin="";
var border="";
var padding="set amount of space";
var content="area needed";
var boxmodel=["margin","border","padding","content"];


var pxNeeded=(marginSize-paddingSize-borderSize-contentsize);

console.log("the correct amount of px needed is"+pxNeeded);
console.log("my array boxmodel includes the parts of the css box model"+ boxmodel);