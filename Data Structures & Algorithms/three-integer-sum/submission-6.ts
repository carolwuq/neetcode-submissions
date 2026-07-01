class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        //need to know how to skip the b
        //only needed to skip b, not c because c would be unique when a and b are different.
        nums = nums.sort((a, b)=> a-b)
        let array = []
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i]==nums[i-1]) {
                continue;
            }
            let left = i+1;
            let right = nums.length -1;
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum < -nums[i]) {
                    left++
                } else if (sum > -nums[i]){
                    right--
                } else {
                    let pair = [nums[i], nums[left], nums[right]]
                    array.push(pair)
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left-1]) {
                        left++
                    }
                }
            }
        }
        return array

    }
}
