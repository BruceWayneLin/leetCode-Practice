module.exports = class medium {
    
    // Input: matrix = 
    // [
    //     [1,2,3,4],
    //     [5,6,7,8],
    //     [9,10,11,12]
    // ]
    // Output: [
    //     1,2,3,4,
    //     8,12,11,10,
    //     9,5,6,7
    // ]
    spiralMatrix() {
        let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
        const arr = [];
        //simple dummy solution;
        for(let i = 0; i < matrix[0].length; i++) {
            arr.push(matrix[0][i])
        }
        for(let i = 1; i < matrix.length-1; i++) {
            arr.push(matrix[i][matrix.length])
        }
        for(let i = matrix[2].length-1; i >= 0; i--) {
            arr.push(matrix[2][i])
        }
        for(let i = 0; i < matrix[1].length-1; i++) {
            arr.push(matrix[1][i])
        }
        console.log(arr);
        
        // efficient way
        while (matrix.length) {
            arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map(a => a.shift()).reverse()
            );
        }
        return arr;
    }
}