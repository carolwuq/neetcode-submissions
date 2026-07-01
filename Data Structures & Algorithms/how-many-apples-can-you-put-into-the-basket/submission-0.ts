class Solution {
    /**
     * @param {number[]} weight
     * @return {number}
     */
    maxNumberOfApples(weight: number[]): number {
        //add the value of array, as far as total <= 5000. return the index+1
        let i = 0;
        let total = 0;
        while( i < weight.length && total <= 5000) {
            total += weight[i];
            i++;
            console.log('total', total)
            console.log('i', i)
        }
        return (total <= 5000) ? i : i-1
    }
}
