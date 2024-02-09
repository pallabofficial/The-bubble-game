
let bubbleHtmlCode = "";
let timer = 60;
let randomValue;
let target;
let score = 0;

function setTimer(){
    let timing = setInterval(function(){
    
        if(score ===100){
            clearInterval(timing);
            document.querySelector("#panel-game").innerHTML  = "<h1>GAME OVER <br> You won</h1>";

        }
        if(timer>0){
            timer--;
            document.querySelector("#timer-value").innerHTML = `${timer}`;
        }
        else{
            clearInterval(timing);
            document.querySelector("#panel-game").innerHTML  = "<h1>GAME OVER <br> You lost</h1>";
        }
        
        // if (timer===0){
            
        // }
       
        
    },1000)
   
}

function createBubble(){
    for(let i = 0; i < 2000; i++){
        randomValue = Math.floor(Math.random()*10);
        bubbleHtmlCode += `<div class="bubble">${randomValue}</div>`;
    }
    
    document.querySelector("#panel-game").innerHTML  = bubbleHtmlCode;
    
    
    window.addEventListener('resize', hideOverflowedBubbles);
    window.addEventListener('load', hideOverflowedBubbles);
    
    function hideOverflowedBubbles() {
        const panelGame = document.getElementById('panel-game');
        const bubbles = panelGame.querySelectorAll('.bubble');
        const containerRect = panelGame.getBoundingClientRect();
    
        bubbles.forEach(bubble => {
            const rect = bubble.getBoundingClientRect();
            
    
            if (
                
                
                rect.bottom > containerRect.bottom 
                
            ) {
                bubble.style.visibility = 'hidden';
            } else {
                bubble.style.visibility = 'visible';
            }
        });
    }
    hideOverflowedBubbles() ;
}

function setTarget(){
    target = Math.floor(Math.random()*10);
    document.querySelector("#target").innerText = `${target}`;
}
function increaseScore(){
    score+=10;
    document.querySelector("#score").innerHTML=`${score}`;
    
}


createBubble();
setTimer();
setTarget();

const gameScreen = document.querySelector("#panel-game");
gameScreen.addEventListener("click", function(event){
    let clickedBubble = Number(event.target.innerText);
    if (clickedBubble === target){
        increaseScore();
        createBubble();
        setTarget();
    }
})







