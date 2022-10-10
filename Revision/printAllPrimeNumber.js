const firstNum = 4;
const secondNum = 12;

function checkIsPrimeNumOrNot(primeNum) {
    if(primeNum < 2) {
        return false;
    }
    for (let i = 2; i < primeNum; i++) { 
        if (primeNum % i === 0) {
            return false; 
        }
    }
    return true;
}

function primeNumber(num1, num2) { 
    let primeNum = [];  
    for(let i = num1; i <= num2; i++) {
        let prime = checkIsPrimeNumOrNot(i);
        if(prime === true) {
            primeNum.push(i); 
        }
    }
    return primeNum;
}
const result = primeNumber(firstNum, secondNum);
console.log(result);