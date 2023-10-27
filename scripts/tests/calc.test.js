//const { TestScheduler } = require('jest');
const [addition,subtraction ]= require('../calc');

describe('calculator testing  ',()=>{
    describe('Addition function',()=>{
        test('run addtion to get 42 ',() => {
            expect(addition(22,20)).toBe(42);
        });
    });
    describe('subtraction function',()=>{
        test('run subtraction to get 2 ',() => {
            expect(subtraction(22,20)).toEqual(2);
        });
    });
});