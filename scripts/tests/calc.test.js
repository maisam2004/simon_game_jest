//const { TestScheduler } = require('jest');
const [addition,subtraction,multi,divide ]= require('../calc');

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
    describe('multi function',()=>{
        test('run multi to get 2 ',() => {
            expect(multi(22,20)).toEqual(2);
        });
    });
    describe('divide function',()=>{
        test('run divide to get 2 ',() => {
            expect(divide(22,20)).toEqual(2);
        });
    });
});