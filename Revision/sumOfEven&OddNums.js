const Numbers = [8,4,16,57,43,15,12,18,22];

function sumOfEvenAndOddNums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenSum = evenSum + arr[i];
        } else {
            oddSum = oddSum + arr[i];
        }
    }
    console.log('sum of Even Numbers '+ evenSum);
    console.log('sum of Odd Numbers '+ oddSum);
}
sumOfEvenAndOddNums(Numbers);