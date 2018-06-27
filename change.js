var $ = function(id) { return document.getElementById(id); };
var calculateChange = function() {
    var cents = parseInt($("cents").value);
    if (cents <= 0 || cents > 99) {

        alert("Please enter a valid number between 0 and 99”.");

    }
    //Quarters
    var quarters = Math.floor(cents / 25);
    cents %= 25;
    $("quarters").value = quarters

    //Dimes
    var dimes = Math.floor(cents / 10);
    cents %= 10;
    $("dimes").value = dimes

    //Nickels
    var nickels = Math.floor(cents / 5);
    cents %= 5;
    $("nickels").value = nickels

    //Pennies
    var pennies = Math.floor(cents / 1);
    cents %= 1;
    $("pennies").value = pennies

};

window.onload = function() {
    $("calculate").onclick = calculateChange;
};