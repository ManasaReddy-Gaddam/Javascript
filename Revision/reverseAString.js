const string = 'hello'; 

function reverseAString(stg) { 
    let newString = ''; 
    for (let i = stg.length-1; i >= 0; i--){ 
        newString = newString + stg[i]; 
    }
    console.log(newString);
}

reverseAString(string);