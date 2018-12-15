
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var round = 0;


var welcome = document.getElementById("welcome");
var userSELECTS = document.getElementById("userSELECTS");
var computerChoiceText = document.getElementById("computer-text");
var youWIN = document.getElementById("youWIN");
var youLOST = document.getElementById("youLOST");
var roundText = document.getElementById("roundText");


    document.onkeyup = function(event){
        var userChoice = event.key; 
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (round < 9){ 
            if(userChoice == computerChoice){
                win ++;
                round++;
                console.log("you win" + win +" you lose " + lose + " the round is " + round);
            }
            else{
                lose ++;
                round++;
                console.log("you win" + win +" you lose " + lose + " the round is " + round);
            }   
        }
        else{
            if (win < lose ){
                alert("End of the game you have win " + win + " times");
                round = 0;
                win = 0;
                lose = 0;
            }
            else{
                alert("End of the game you have lost " + lose + " times");
                round = 0;
                win = 0;
                lose = 0;
            }
        }
 
        userSELECTS.textContent = "You choose: " + userChoice;
        computerChoiceText.textContent = "Computer: " + computerChoice;
        youWIN.textContent = "Wins: " + win;
        youLOST.textContent = "lose: " + lose;
        roundText.textContent = "round: " + round;

    };











    

    



