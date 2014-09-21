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


/* conditionals notes

if(condition){actions-code runs if condition is true}

 else{ actions performed if condition is false-should never have condition attached to it
 ();}


else if() {
else if -choosing between three or more blocks of code-always require a condition-goes before and else


}

 = assignment

equality operators

== equal to/equality
=== strict equality
!= not equal to/inequality



relational operators-comparing two variables or values

the comparison results in true false

 > greater than
 < less than
 >=greater than or equal to
 <=less than or equal to




*/