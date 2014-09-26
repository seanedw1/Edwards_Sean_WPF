
function discountedPrices(costOfItem,discountPercent){


    var costOfItem=(prompt("what is the cost of the item"));

    if(costOfItem===""){//i know im suppose to use a NAN but i could get it to work correctly NaN>100
        (prompt("please enter a amount of cost"));

    }

    var discountPercent=(prompt("what is the percentage of discount available to you"));

    if(discountPercent >= 100){//same thing here
        console.log("please enter a percentage amount between 0 and 100");
        (prompt("what is the percentage of discount available to you"));
    }



  var  totalPrice=costOfItem*(discountPercent/100);
    var totalAfter=costOfItem-totalPrice;
    console.log("the original price of item is " +costOfItem+ " the percentage of a discount is " +discountPercent+ " % after the discount is applied the new total is "+totalAfter );
    return discountPercent;
}

discountedPrices();




 //<less than