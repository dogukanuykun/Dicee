var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomDiceImage = "dice"+randomNumber1+".png"

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}


// var randomNumber = Math.floor(Math.random()*6) +1;
// var randomNumber2 = Math.floor(Math.random()*6) +1;



// if(randomNumber===1){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice1.png")
// }
// if(randomNumber===2){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice2.png")
// }
// if(randomNumber===3){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice3.png")
// }
// if(randomNumber===4){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice4.png")
// }
// if(randomNumber===5){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice5.png")
// }
// if(randomNumber===6){
//     document.querySelectorAll("img")[0].setAttribute("src" ,"./images/dice6.png")
// }

// // DICE 2

// if(randomNumber2===1){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice1.png")
// }
// if(randomNumber2===2){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice2.png")
// }
// if(randomNumber2===3){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice3.png")
// }
// if(randomNumber2===4){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice4.png")
// }
// if(randomNumber2===5){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice5.png")
// }
// if(randomNumber2===6){
//     document.querySelectorAll("img")[1].setAttribute("src" ,"./images/dice6.png")
// }