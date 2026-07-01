class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        //two pointer end:
        //check the end sum if sum > target, right end --, 
        //sum == target return index
        //sum < target left end++
        if (numbers.length < 2) {return []}
        let indexL = 0;
        let indexH = numbers.length - 1;
        while (indexL < indexH) {
            let sum = numbers[indexL] + numbers[indexH];
            if (sum < target) {
                indexL++
            } else if (sum == target) {
                return [indexL+1, indexH+1]
            } else if (sum > target) {
                indexH--
            }
             
        }
        return []

    }
}
