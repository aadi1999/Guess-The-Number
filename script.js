// document.querySelector('h1').textContent = "hello";
// document.querySelector('.between').textContent = "between 100 to 200";

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector(".check"));

const randomNumber = Math.trunc(Math.random()*20 + 1);

document.querySelector(".number").textContent = randomNumber;


let score = 20;

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // let score = document.querySelector(".score").value;
    if(!guess){
        document.querySelector(".message").textContent = "⚠ No Number";
    }else if(guess === randomNumber){
        document.querySelector(".message").textContent = "😊Correct Number";
        document.querySelector("body").style.backgroundColor = "#60b347";
    }else if(guess > randomNumber){
        if(score > 1){
            document.querySelector(".message").textContent = " Too high";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = " You lost the game!";
            document.querySelector(".score").textContent = 0;

        }
        
    }else if(guess < randomNumber){
        
        if(score > 1){
            document.querySelector(".message").textContent = " Too low";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = " You lost the game!";
            document.querySelector(".score").textContent = 0;

        }
    }

});