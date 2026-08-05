class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //array, track the frequency of the array, if the frequency = k, then push the number
        //is array in order
        let array = [];

        let temp = new Map();
        for(const num of nums) {
            temp.set(num, (temp.get(num) || 0)+1)
        }
        array = Array.from(temp.entries())
        console.log('array=>', array)
        array = array.sort((a,b)=> b[1]-a[1]).map(a=> a[0]).slice(0, k)
        return array
    }
}
