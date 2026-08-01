class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        //hash set
        //search if number already existed in row, column and square, if not add. if so, return false
        let row = new Map();
        let column = new Map();
        let square = new Map();
        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                let current = board[r][c]
                let squareIndex = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`
                console.log('current', current)
                if (current === '.') {
                    continue;
                }
                let existedR = row.get(r) && row.get(r).has(current)
                let existedC = column.get(c) && column.get(c).has(current)
                let existedS = square.get(squareIndex) && square.get(squareIndex).has(current)
                if (existedR || existedC || existedS) {
                    return false
                }

                if (!row.has(r)) {
                    row.set(r, new Set())
                }
                if (!column.has(c)) {
                    column.set(c, new Set())
                }
                if (!square.has(squareIndex)) {
                    square.set(squareIndex, new Set())
                }

                row.get(r).add(current)
                column.get(c).add(current)
                square.get(squareIndex).add(current)

                const iterator = row[Symbol.iterator]();

                for (const item of iterator) {
                console.log('row => ',item);
                }
                const iteratorC = column[Symbol.iterator]();

                for (const item of iteratorC) {
                console.log('column => ',item);
                }                
                const iteratorS = square[Symbol.iterator]();

                for (const item of iteratorS) {
                console.log('square => ',item);
                }
            }
        }
        return true
    }
}
