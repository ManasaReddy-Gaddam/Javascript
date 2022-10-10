const charecter = '*';

function checkAlphabetOrNot(char) {
    let letter = char.toUpperCase();
    if(letter === 'A' || letter === 'B' || letter === 'C' || letter === 'D'|| letter === 'E'   
    || letter === 'F'|| letter === 'G' || letter === 'H'|| letter === 'I' || letter === 'J'||  
    letter === 'K' || letter === 'L' || letter === 'M' || letter === 'N'|| letter === 'O' ||  
    letter === 'P'|| letter === 'Q' || letter === 'R'|| letter === 'S' || letter === 'T'||
    letter === 'U' || letter === 'V'|| letter === 'W' || letter === 'X'|| letter === 'Y' || letter === 'Z') {
        return 'Alphabet';
    }
    if(letter === '0' || letter === '1' || letter === '2' || letter === '3' || letter === '4' 
    || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9') {
        return 'Number';
    } else {
        return 'Special Character';
    }
}
let result = checkAlphabetOrNot(charecter);
console.log(result);