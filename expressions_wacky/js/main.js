//sean edwards
//wpf section 0
//9/10/14

alert("sean is going to throw a project x party this weekend and invites all 400 of his facebook friends he ask you to invite all of your facebook friends");
alert("sean estimates the need for 12 kegs");
alert("entry will be $5 to cover damage and dj expenses");

var inviteSent=prompt("how many friends will you invite?");
var rsvp=prompt("how many people rsvp");
var beerSupply=prompt("how many kegs of beer will you bring?");



var peopleComing=inviteSent-rsvp;
var invites=("amount of invites sent people");
var beerNeeded=12;
var stillNeeded=(beerSupply-beerNeeded);
var djPrice=40.00;
var hoursPlayed=9;
var amountPayedToDj=(djPrice*hoursPlayed);
var cover=10.00;
var totalAmountMade=(rsvp*cover);
var totalAfterDJ=(rsvp*cover-amountPayedToDj);


console.log("sean made a total of " + totalAmountMade + " before paying the dj.after paying the dj sean had left " +totalAfterDJ + "from the party.");
console.log("the dj made a total of "+ amountPayedToDj);
console.log("sean still needs " +stillNeeded);