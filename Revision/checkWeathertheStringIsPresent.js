const arr = ['hello','world','welcome','go'];
const string = 'come';

function checkWeatherTheStringIsPresentOrNot(arr, stg) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === stg) {
            return 'String is Present in an Array.';
        } 
    }
    return 'String is not Present in An Array.';
}
const result = checkWeatherTheStringIsPresentOrNot(arr, string);
console.log(result);