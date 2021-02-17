// document.querySelector('h1').textContent = "hello";
// document.querySelector('.between').textContent = "between 100 to 200";

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector(".check"));

let randomNumber = Math.trunc(Math.random()*20 + 1);
let highscore = 0;
let score = 20;

document.querySelector(".again").addEventListener('click',function(){

    document.querySelector(".message").textContent = "Start Guessing...";
    score = 20;
    randomNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = " #222"
    document.querySelector(".guess").value = '';
    
    // document.querySelector(".number").textContent = randomNumber;
})

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // document.querySelector(".guess").style.color = "inherit";
    // let score = document.querySelector(".score").value;
    if(!guess){
        document.querySelector(".message").textContent = "⚠ No Number";
    }else if(guess === randomNumber){
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".message").textContent = "😊Correct Number";
        document.querySelector("body").style.backgroundColor = "#60b347";
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }else if(guess > randomNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "Too high !";
            // document.querySelector(".guess").style.color = "red";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = " You lost the game!";
            document.querySelector(".score").textContent = 0;

        }
        
    }else if(guess < randomNumber){
        
        if(score > 1){
            document.querySelector(".message").textContent = " Too low !";
            // document.querySelector(".guess").style.color = "red";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = " You lost the game!";
            document.querySelector(".score").textContent = 0;

        }
    }

});