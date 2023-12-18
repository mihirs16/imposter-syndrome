const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixColumn = (matrix: number[][], colIdx: number) => matrix.map(x => x[colIdx]);
console.log(matrixColumn(matrix, 0))
