const array = [2,5,6,18,12,1,14,16,4];
const num = 1;

function serachElementInAnArray(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return 'number is present at index ' + i;
        }
    }
    return 'number is not present in an array.';
}
const result = serachElementInAnArray(array, num);
console.log(result);