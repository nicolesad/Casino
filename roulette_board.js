var spin_b = document.getElementById("btnspin");
var betred_b = document.getElementById("betred");
var betblack_b = document.getElementById("betblack");
var betout = black;
var betin = null;
spin_b.onclick = function () {
    var rand = Math.floor(Math.random() * 37);
    if (rand % 2 == 1 && rand < 10 ) {
        betout = red;
    } else if (rand % 2 == 0 && 11 < rand < 19) {
        betout = red;
    }
    else if (rand % 2 == 1 && 18 < rand < 30 ) {
        betout = red;
    } else if (rand % 2 == 0 && 29 < rand) {
        betout = red;
    }

    if(betout == black && betin == black) {
        //payout
        alert("payed out!");
        //add money to total
    } else if(betout == black && betin != black) {
        //no moneys
        alert("lost");
        //remove money from total
    } else if(betout == red && betin == red) {
        //payout
        alert("payed out!");
        //add money to total
    } else if(betout == red && betin != red) {
        //no moneys
        alert("lost");
        //remove money from total
    }

}

//fake change

betred_b.onclick = function() {
    console.log("red bet placed");
    betin = red;
    spin_b.style.visibility = "visible";
}

betblack_b.onclick = function() {
    console.log("black bet placed");
    betin = black;
    spin_b.style.visibility = "visible";
}




