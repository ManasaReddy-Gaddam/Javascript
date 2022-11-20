const number = 5; 

function factorialOfANumber(num) { 
    let answer = 1; 
    for(let i = num; i >= 1; i--) {
        answer = answer * i; 
    }
    console.log(JSON.stringify(this));
    return answer;
}
const result = factorialOfANumber(number);
console.log(result);