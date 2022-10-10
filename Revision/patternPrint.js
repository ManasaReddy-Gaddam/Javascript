const rows = 7; 

function printPattern(rows) {
    let spaces = rows - 1; 
    for(let i = 1; i <= rows; i++) { 
        let result = ''; 
        for(let j = 1; j < spaces; j++) {
            result = result + ' ';
        }
        for(let k = i; k >= 1; k--) { 
            let x = i + k; 
            let y = x % 2;
            result = result + y + ' '; 
        }
        console.log(result);
        spaces = spaces - 1;
    }
}
printPattern(rows);