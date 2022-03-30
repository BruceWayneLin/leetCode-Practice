module.exports = class medium {
    
    // Input: matrix = 
    // [
    //     [1,2,3,4],
    //     [5,6,7,8],
    //     [9,10,11,12]
    //     [13,14,15,16]
    // ]
    // Output: [
    //     1,2,3,4,
    //     8,12,11,10,
    //     9,5,6,7
    // ]
    spiralMatrix() {
        let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
        const arr = [];
        //simple dummy solution;
        const rowCount = matrix.length;
        const columnCount = matrix[0].length;
        let startRow = 0;
        let endRow = rowCount - 1;
        let startColumn = 0;
        let endColumn = columnCount - 1;
    
        // We will keep walking as long as rows or columns remain.
        // That happens as long as the end is greater or equal to the start.
        while (endRow >= startRow && endColumn >= startColumn) {
        // Walk across the top starting row for each column from beginning to end
        // This is left-right across the top
        for (let column = startColumn; column <= endColumn; column++) {
            // Add the item to result in order
            arr.push(matrix[startRow][column]);
        }
    
        // Increment our start row since we visited each value
        startRow++;
    
        // Walk top-bottom for the end column
        for (let row = startRow; row <= endRow; row++) {
            arr.push(matrix[row][endColumn]);
        }
        endColumn--;
    
        // Since we increment startRow, we need to make sure we are still in bounds
        if (endRow >= startRow) {
            //  Walk right-left on the bottom row
            for (let column = endColumn; column >= startColumn; column--) {
                arr.push(matrix[endRow][column]);
            }
        }
        endRow--;
    
        // Since we increment startRow, we need to make sure we are still in bounds
        if (endColumn >= startColumn) {
            // walk bottom-top for the start column
            for (let row = endRow; row >= startRow; row--) {
                arr.push(matrix[row][startColumn]);
            }
        }
            startColumn++;
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