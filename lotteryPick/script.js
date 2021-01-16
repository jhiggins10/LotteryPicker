/*
to do: 
css
*/
var BallsNun = [];
var BallsResults = [];
var luckLet = ["ABB", "WAB", "PSA", "RTS", "NNA", "LAS", "POL"];
var luckNum = [];

function getDate(){
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    document.getElementById("TodaysDate").innerHTML += "Get your lottery numbers for: " + date;
}


for (var i = 1; i < 100; i++){
    BallsNun.push(i);
}

function getNumber(){
    console.log("In getNumber");
    var numberofBalls = document.getElementById("numberOfBalls").value;
    console.log("numberofBalls is " + numberofBalls);
    for (var a = 1; a <= numberofBalls; a++){
       var lottNum = BallsNun[Math.floor(Math.random()*BallsNun.length)];
       console.log("lottNum is " + lottNum);
       BallsResults.push(lottNum);
       console.log("BallsResults " + JSON.stringify(BallsResults));
    }
    todayNums()
    var luckyDip = document.getElementById("LuckyDip").value;
    console.log("luckyDip is " + luckyDip);
    if (luckyDip == "Yes"){
        LuckyDip();
    } else if (luckyDip == "No") {
        alert("Why don't you try a lucky dip next time!!");
    } else {
        alert("You should'nt be here!!!");
    }
}

function todayNums(){
console.log("today's lottery numbers are " + JSON.stringify(BallsResults));
document.getElementById("tellUser").innerHTML += "Your numbers are : "
document.getElementById("showResults").innerHTML += BallsResults;
}

function LuckyDip(){
    console.log("In lucky dip");
    for (var i = 100; i < 999; i++){
        luckNum.push(i);
    }
    var FinalLetts = luckLet[Math.floor(Math.random()*luckLet.length)];
    console.log("FinalLetts is " + FinalLetts);
    var FinalNum = luckNum[Math.floor(Math.random()*luckNum.length)];
    console.log("FinalNum is " + FinalNum);
    var finalTotal = FinalLetts + FinalNum;
    console.log("FinalTotal is " + finalTotal);
    document.getElementById("ShowFinal").innerHTML += "Lucky dip is " +  finalTotal;
}