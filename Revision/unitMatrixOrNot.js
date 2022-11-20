const matrix = [[1, 0, 1],
             [0, 8, 0],
             [5, 0, 1]];

function unitMatrix(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    if (rows !== columns) {
        return 'Given matrix is not unit matrix';
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if ((i === j && arr[i][j] !== 1) || (i !== j && arr[i][j] !== 0)) {
                return 'Given Matrix is not Unit Matrix';
            }
        }
    }
    return 'Given Matrix is Unit Matrix';
}
const result = unitMatrix(matrix);
console.log(result);