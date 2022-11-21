const nums = [16,15,18,19,16,15,21];

function countNumberOfDuplicateEle(arr) {
    let duplicateNumCount = 0;
    let count = {};
    for(let i = 0; i < arr.length; i++) {
        if(count[arr[i]] === undefined) {
            count[arr[i]] = 1;
        } else {
            count[arr[i]] = count[arr[i]] + 1;
        }
    }
    console.log(count);
    let keys = Object.keys(count);
    for(let i = 0; i < keys.length; i++) {
      if(count[keys[i]] > 1) {
        duplicateNumCount = duplicateNumCount + 1;
      }
    }
    console.log(duplicateNumCount);
}
countNumberOfDuplicateEle(nums);