class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        //hash set
        let rows = new Map();
        let columns = new Map();
        let squares = new Map();
        for(let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let current = board[r][c]
                if (current == ".") {
                    continue;
                }
                let index = `${Math.floor(r/3)}, ${Math.floor(c/3)}`

                let existedR = rows.get(r) && rows.get(r).has(current)
                let existedC = columns.get(c) && columns.get(c).has(current)
                let existedQ = squares.get(index) && squares.get(index).has(current)

                if (existedR || existedC || existedQ) {
                    return false
                }

                if (!rows.get(r)) {
                    rows.set(r, new Set())
                }
                if (!columns.get(c)) {
                    columns.set(c, new Set())
                }
                if (!squares.get(index)) {
                    squares.set(index, new Set())
                }

                rows.get(r).add(current)
                columns.get(c).add(current)
                squares.get(index).add(current)
            }
        }
        return true
    }
}
