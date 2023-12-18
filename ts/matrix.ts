const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixColumn = (matrix: number[][], colIdx: number) => matrix.map(x => x[colIdx]);

// print all edges
console.log([
    matrix.map(x => x[0]),
    matrix[0],
    matrix.map(x => x[matrix[0].length - 1]),
    matrix[matrix.length - 1]
]);
