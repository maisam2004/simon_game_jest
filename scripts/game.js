let game = {
    score:0,
    currentGame:[],
    playerMove:[],
    choices:["button1","button2","button3","button4"],
}
//let nameGame#
function showScore() {
    document.getElementById('score').innerText = game.score;
}
let newGame = ()=>{
    game.playerMove = [],
    game.currentGame = [],
    game.score = 0,
    showScore();
};


module.exports={game,newGame,showScore};