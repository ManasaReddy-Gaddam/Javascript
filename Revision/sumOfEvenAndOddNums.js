const array = [25,34,6,87,14,15,27];

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
sumOfEvenAndOddNums(array);