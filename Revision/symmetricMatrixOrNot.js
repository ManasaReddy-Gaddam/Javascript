const matrix = [[18,21,72],[39,14,16],[18,74,43]];

function symmetricMatrix(mat) { 
    let rows = mat.length; 
    let columns = mat[0].length;
    if(rows !== columns){  
        return 'Given matrix is not Symmetric matrix';
    }
    newMat =[]; 
    for(let i = 0; i < mat[0].length; i++) {
        let rows = [];  
        for(let j = 0; j < mat.length; j++) {
            rows.push(mat[j][i]);                 
            newMat.push(rows);
            console.log(newMat); 
            if(mat[i][j] !== newMat[i][j]) {
                return 'Given Matrix is not a Symmetric Matrix';
            }
        }   
    }     
    return 'Given Matrix is Symmetric Matrix';          
}
const res = symmetricMatrix(matrix);
console.log(res);