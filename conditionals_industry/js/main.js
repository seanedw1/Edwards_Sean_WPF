/**
 * Created by seanpro on 9/15/14.
 */
var freelanceEmployee = prompt("freelance or employee?");
var  homeOffice= prompt(" Home or office");

if(freelanceEmployee==="") {
    console.log("you did not answer the question! ");
    var freelanceEmployee = (prompt("please choose freelance or employee? "));

}else{
    console.log("good choice!");

}

if(homeOffice===""){
    alert("please answer Home or office");
}
