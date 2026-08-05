class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //array, track the frequency of the array, if the frequency = k, then push the number
        //is array in order
        nums.sort((a, b)=> a-b)
        let array = [];
        if (nums.length === 0 ) {
            return array
        } else if (nums.length === 1) {
            array.push(nums[0])
            return array
        }

        let temp = new Map();
        for(let i = 0; i < nums.length; i++) {
            let current = nums[i];
            if (temp.has(current)) {
                let frequency = temp.get(current)+1
                temp.set(current, frequency)    
            } else {
                temp.set(current, 1)
            }
        }
        array = Array.from(temp.entries()).sort((a,b)=> b[1]-a[1]).map(a=> a[0])
        console.log('array=>', array)
        array = array.slice(0, k)

        return array
    }
}
