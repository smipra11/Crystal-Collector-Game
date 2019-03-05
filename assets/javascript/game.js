//// Declaring varialble

$(document).ready(function(){
var randonNumber;
var wincount = 0
var losscount =0
var buttonNumber1;
var  buttonNumber2;
var  buttonNumber3;
var buttonNumber4;
var counter = 0;

// number function

function newNumber(){
randonNumber = Math.floor(Math.random() *(120-19))+ 19;
buttonNumber1 = Math.floor(Math.random() * 12)+1;
buttonNumber2 = Math.floor(Math.random() * 12)+1;
buttonNumber3 = Math.floor(Math.random() * 12)+1;
buttonNumber4 = Math.floor(Math.random() * 12)+1;
wincount = 0;
losscount = 0;
counter = 0;
$("#winorloss").text("");
}


// function New Game
function newGame(){
    newNumber();
    counter = 0;
    $("#winorloss").text("");
    $("#displayscore").text(counter);
$("#randomnumber").text(randonNumber);
$("#wincount").text(wincount);
$("#losscount").text(losscount);
$("#crystal1").attr("datavalue",buttonNumber1)
$("#crystal2").attr("datavalue",buttonNumber2)
$("#crystal3").attr("datavalue",buttonNumber3)
$("#crystal4").attr("datavalue",buttonNumber4)
};




newGame();

$(".button").on("click",function(){
    if( counter> randonNumber){
        return;
    }
    var crystalValue = $(this).attr("datavalue");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
     var wintext = "You Win!!";
     var losstext = "You Loss"
    $("#displayscore").text(counter);
    if (counter === randonNumber){
        $("#winorloss").text("you Win");
        wincount++
        $("#wincount").text(wincount);

    }
    else if (counter> randonNumber){
        $("#winorloss").text("You Loss");
        losscount++
        $("#losscount").text(losscount);
           }
          
    
});





$(".btn").on("click",function(){
    newGame();

});

});




