const number = 10001;

function palindromeOrNot(num) { 
    let originalNum = num;
    let lastDigit = 0; 
    let result = 0; 
    while(num > 0) { 
        lastDigit = num % 10; 
        result = result * 10 + lastDigit; 
        num = Math.floor(num / 10);   
    }  
    if(result === originalNum) {
        return 'it is a palindrome.';
    } else {
        return ' It is Not a palindrome.';
    }
}

const result = palindromeOrNot(number);
console.log(result); 