const num = 8695968;

function palindromeNum(number) { 
    let originalNum = number;
    let lastDigit = 0; 
    let res = 0; 
    while(number > 0) { 
        lastDigit = number % 10; 
        res = res * 10 + lastDigit;
        number = Math.floor(number / 10);
    }  
    if(res === originalNum) {
        return 'Number is palindrome';
    } else {
        return ' It is Not a palindrome';
    }
}
const result = palindromeNum(num);
console.log(result); 