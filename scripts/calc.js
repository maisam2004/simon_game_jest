

function addition(num1,num2){
    let result = (typeof num1 === 'number' && typeof num2 === 'number')? num1+num2 : 'Error';
    return result;
};
let subtraction = (num1,num2)=>{
    let result = (typeof num1 === 'number' && typeof num2 === 'number')? num1-num2 : 'Error';

    return result;
}


let divide = (num1, num2) => {
    let dividing = (typeof num1 === 'number' && typeof num2 === 'number' && num2 !== 0) ? (num1 / num2 ): 'Error';
    return dividing;
};

let multi = (num1, num2) => {
    let multi = (typeof num1 === 'number' && typeof num2 === 'number') ? (num1 * num2) : 'Error';
    return multi;
};



module.exports = [addition,subtraction,divide,multi];