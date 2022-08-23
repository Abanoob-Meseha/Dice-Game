let result = document.querySelector('.result'),
    player1_img = document.querySelector('#p1_img'),
    player2_img = document.querySelector('#p2_img'),
    goBtn = document.querySelector('.goBtn');

function Go(){
    console.log('button clicked')
    p1Result = Math.ceil(Math.random() * (60/10));
    p2Result = Math.ceil(Math.random() * (60/10));
    player1_img.src = `images/dice${p1Result}.png`;
    player2_img.src = `images/dice${p2Result}.png`;
    console.log(`p1 = ${p1Result} , p2 =${p2Result}`)

    if(p1Result > p2Result){
        result.innerHTML = "<h3>Player 1 wins 🎲🏆</h3>";
    }
    else if (p1Result == p2Result){
        result.innerHTML = "<h3>draw no one wins 🎲🏆</h3>";
    }
    else{
        result.innerHTML = "<h3>Player 2 wins 🎲🏆</h3>";
    }

}

goBtn.addEventListener('click' ,Go);