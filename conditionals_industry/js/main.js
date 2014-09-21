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
    var homeOffice=(prompt("please answer Home or office"));
}else{
    console.log("thank u for answering");
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

== equal to/equality/the same as
=== strict equality/the value and the same type is beter than ==
!= not equal to/inequality/is not the same as/uses the ! operator



relational operators-comparing two variables or values/go between pairs of objects/always work in pairs

the comparison results in true false

 > greater than
 < less than
 >=greater than or equal to
 <=less than or equal to

logical operators-comparing pairs of true and false/between realational expressions or boolean values/always works in pairs

 the comparison results in true false
 they compare two true or false values
 they compare pairs of relational expressions

&& and -requires both in pair to be true for the whole pair to be true
|| or -requires at least one of the pair to be true for the whole pair to be true
 ! not -flips a value-true becomes false, false becomes true-is not used for comparison-if more than one are true the result is false
^ exclusive or (xor)

ternaries-decision making on one line

(condition)? do if true : do if false;


*/