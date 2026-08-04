class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        //create the row or column number to mark if any zeros
        //set the whole row/column to zero
        //return the matrix
        let row = []
        let column = []
        for(let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === 0) {
                    row[r] = 0;
                    column[c] = 0;
                }
            }
        }

        for(let r = 0; r < matrix.length; r++) {
            if (row[r] === 0) {
                for(let c = 0; c < matrix[r].length; c++) {
                    matrix[r][c] = 0
                }
            }
        }

        for(let c = 0; c < matrix[0].length; c++) {
            if (column[c] === 0) {
                for(let r = 0; r < matrix.length; r++) {
                    matrix[r][c] = 0
                }
            }
        }

    }
}
