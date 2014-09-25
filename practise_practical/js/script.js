//sean edwards
//9/24/14
//wpf


var radius= (prompt("please enter the radius for a circle"));

if (radius ===""){
    var radius = (prompt("you did not enter a radius"));
    console.log("please enter a radius");
}
var results=areaCircle(radius);
function areaCircle(r){
    var area=2*r*Math.PI;
    return area
}

console.log("the area of the triangle is " +results);
