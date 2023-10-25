/**
 * @jest-environment jsdom
 */



const {game,newGame} = require('../game');
const { expect, beforeAll } = require('@jest/globals');
//const { default: test } = require('node:test');


beforeAll(()=>{
    let fs = require('fs');
    let fileContentes = fs.readFileSync('index.html','utf-8');
    document.open();
    document.write(fileContentes);
    document.close();
})
//I want to create an object that will hold the  game state, which is going to be the score,  
//current game sequence, player moves, and so on.

describe("game object contains correct keys",()=>{
    test("score key exist",()=>{
        expect('score' in game).toBe(true);
    });
    test("Current key exist",()=>{
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves exist',()=>{
        expect('playerMove' in game).toBe(true);
    })

    test('Choices exist',()=>{
        expect('choices' in game).toBe(true);
    })
    test("choices contain correct IDs",() => {
        expect(game.choices).toEqual(["button1","button2","button3","button4"]);
    })
})

describe('newGame works correctly',()=>{
    beforeAll(()=>{
        game.score = 42;
        game.playerMove = ['button1',"button2"];
        game.currentGame = ['button1','button2'];
        newGame();
    });
    test('newGame reset game score ',()=>{
        expect(game.score).toBe(0);

    });
    test('newGa,e reset current Game ',()=>{
        expect(game.currentGame.length).toBe(0);

    });
    test('newGame reset player moves',()=>{
        expect(game.playerMove.length).toBe(0);

    });


});