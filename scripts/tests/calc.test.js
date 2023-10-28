//const { TestScheduler } = require('jest');
const [addition,subtraction,divide,multi]= require('../calc');

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
    
    describe('multi function', () => {
        test('run multi to get 4 ', () => {
            expect(multi(2, 2)).toBe(4);
        });
    });
    
    describe('divide function', () => {
        test('run divide to get 1 ', () => {
            expect(divide(2, 2)).toBe(1);
        });
    });
    


    describe('to check error for string argument',() =>{
        test('string argument ',()=>{
            expect(addition('t',77)).toBe('Error');
        });
        test('empty string value handling',()=>{
            expect(multi('',77)).toBe('Error');
        });
        test('array value check for multi',()=>{
            expect(multi([77],77)).toBe('Error');
        });
    });
});