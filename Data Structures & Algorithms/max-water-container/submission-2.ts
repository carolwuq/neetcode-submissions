class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // maxArea(heights: number[]): number {
    //     //brutal force
    //     //iterate through all possible containers and find the largest one, return the area
    //     let area = Math.min(heights[0], heights[heights.length-1]) * (heights.length -1)
    //     for(let i = 0; i < heights.length; i++) {
    //         for(let j = heights.length-1; j > i; j--){
    //             let current = Math.min(heights[i], heights[j])*(j-i)
    //             if (current > area) {
    //                 area = current
    //             } 
    //             console.log('area=>', area)
    //         }
    //     }
    //     return area
    // }
    maxArea(heights: number[]): number {
        //two pointers:
        //move the smaller number, if same, move them together or only move the left side
        let area = Math.min(heights[0], heights[heights.length -1]) * (heights.length -1);
        let left = 0;
        let right = heights.length -1
        while(left<right) {
            let current = Math.min(heights[left], heights[right]) * (right - left)
            if (current > area) {
                area = current
            }
            if (heights[left] <= heights[right]) {
                left++
            } else {
                right--
            }
        }
        return area
    }
}
