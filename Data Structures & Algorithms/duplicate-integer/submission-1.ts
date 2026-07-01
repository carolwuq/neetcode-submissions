class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // let array = [];
        // for(let i = 0; i < nums.length; i++) {
        //     if (array.includes(nums[i])) {
        //         return true
        //     } else {
        //         array.push(nums[i])
        //     }
        // }
        // return false

        //check the first one againest the rest and see if could find any same number
        for(let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true
                } else {
                    continue;
                }
            }
        }
        return false
    }
}
