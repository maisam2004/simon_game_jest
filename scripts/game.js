let game = {
    score:0,
    currentGame:[],
    playerMove:[],
    choices:["button1","button2","button3","button4"],
}
//let nameGame#
let newGame = ()=>(
    game.playerMove = [],
    game.currentGame = [],
    game.score = 0
);

module.exports={game,newGame};