const digit = 9; 

function digitPrintInWords(digit) { 
    if(digit === 0) {
        return 'Zero';
    }
    if(digit === 1) {
        return 'One';
    }
    if(digit === 2) {
        return 'Two';
    }
    if(digit === 3) {
        return 'Three';
    }
    if(digit === 4) {
        return 'Four';
    }
    if(digit === 5) {
        return 'Five';
    }
    if(digit === 6) {
        return 'Six';
    }
    if(digit === 7) {
        return 'Seven';
    }
    if(digit === 8) {
        return 'Eight';
    }
    if(digit === 9) {
        return 'Nine';
    }
}

const result = digitPrintInWords(digit);
console.log(result);