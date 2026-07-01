class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let array = [];
        for(let i = 0; i < nums.length; i++) {
            if (array.includes(nums[i])) {
                return true
            } else {
                array.push(nums[i])
            }
        }
        return false
    }
}
