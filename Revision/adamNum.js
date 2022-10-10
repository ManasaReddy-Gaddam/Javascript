const number = 100;

function chechAdamNumOrNot(num) { 
    let reverse = reverseNum(num);
    let sqr = num * num;
    let squareReverse = reverseNum(sqr); 
    let reverseNumSqu = reverse * reverse;
    if(squareReverse === reverseNumSqu) {
        return  num + ' is an Adam Number';
    } else {
        return num + ' is not an Adam Number';
    }
}
const result = chechAdamNumOrNot(number);
console.log(result);


function reverseNum(number) { 
    let lastDigit = 0; 
    let result = 0; 
    while(number > 0) { 
        lastDigit = number % 10; 
        result = result * 10 + lastDigit; 
        number = Math.floor(number / 10); 
    }
    return result;
}