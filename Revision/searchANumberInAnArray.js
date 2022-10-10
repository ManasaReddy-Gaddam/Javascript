const array = [ 17,4,9,18,16,19,6]; 
const Number = 16; 

function searchNumberInAnArray(arr, num){ 
    for ( let i = 0; i < arr.length; i++) { 
        if ( arr[i] === num) {
            return 'Number is present at index no. ' + i;
        } 
    }  
    return -1;
}
const result = searchNumberInAnArray(array, Number);
console.log(result);