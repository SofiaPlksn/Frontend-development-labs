function isMagicMatrix(matrix) {
    let sum = matrix[0].reduce((acc, num) => acc + num, 0);

    for (let row of matrix) {
        if (row.reduce((acc, num) => acc + num, 0) !== sum) return false;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = matrix.reduce((acc, row) => acc + row[col], 0);
        if (colSum !== sum) return false;
    }
    return true;
}

console.log(isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(isMagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(isMagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));