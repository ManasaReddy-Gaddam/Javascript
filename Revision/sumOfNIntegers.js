const array = [25,46,19,21,54,19,16];

function findTheSumOfInt(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    console.log(total);
}
findTheSumOfInt(array);