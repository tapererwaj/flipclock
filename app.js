var countdown = 0;

var previousValue = 0;

// const flipTimer = setInterval(() => {
    
//     if(countdown > 30){
//         clearInterval(flipTimer);
//         return;
//     }
//     flipCards(countdown);

//     countdown = countdown + 1;
// }, 1000);


function flipCards(increment){

    value = previousValue + increment;

    const units = value % 10;
    const tens = Math.floor(value / 10);
    
    flipCard(document.querySelector("[data-flipCard]#units"), units);
    flipCard(document.querySelector("[data-flipCard]#tens"), tens);

    previousValue = value;
}

function flipCard(card, value){
    
    const startNumber = card.querySelector("[data-cardTop]").textContent;
    if(parseInt(startNumber) === value) return;

    // get fixed halves
    const top = card.querySelector("[data-cardTop]");
    const bottom = card.querySelector("[data-cardBottom]");

    //  get flipping halves
    const topHalf = card.querySelector(".card-before");
    const bottomHalf = card.querySelector(".card-after");

    // update fixed top half and flipping bottom half
    bottom.textContent = value;
    topHalf.textContent = value;

    // trigger flips
    topHalf.classList.toggle("flip", true);
    bottomHalf.classList.toggle("flip", true);

    setTimeout(() => {
        // update new value
        bottomHalf.textContent = value;
    }, 240);

    setTimeout(() => {
        // update fixed top half value
        top.textContent = value;
    }, 240);

    topHalf.addEventListener("animationend", () => {
        topHalf.classList.toggle("flip", false);
    }); 

    bottomHalf.addEventListener("animationend", () => {
        bottomHalf.classList.toggle("flip", false);
    }); 
};