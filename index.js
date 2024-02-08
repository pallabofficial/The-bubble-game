
let bubbleHtmlCode = "";

for(let i = 0; i < 2000; i++){
    let randomValue = Math.floor(Math.random()*100);
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


const panelGame = document.getElementById('panel-game');
const panelRect = panelGame.getBoundingClientRect();
console.log(panelRect);


