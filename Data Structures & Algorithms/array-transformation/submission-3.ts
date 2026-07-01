class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    transformArray(arr: number[]): number[] {
        //[6,2,3,4]
        //[6, ]
        //update the value of array based on the rule, return the array
        let changed = true;
        let newArr = []
        let first = arr[0]
        let last  = arr[arr.length-1]
        while (changed) {
            changed = false
            newArr = [...arr];
            newArr[0] = first
            for (let i = 1; i < arr.length-1; i++) {
                let curr = arr[i]
                let previous = arr[i-1]
                let after = arr[i+1]
                console.log('i', i)
                console.log('curr', curr)
                console.log('pervious', previous)
                console.log('after', after)
                if (curr < previous && curr < after){
                    newArr[i] = curr + 1
                    changed = true
                } else if (curr > previous && curr > after) {
                    newArr[i] = curr -1
                    changed = true
                } else {
                    newArr[i] = arr[i]
                }
                console.log('newArr[i]', newArr[i])
            }
            newArr[arr.length-1] = last
            console.log('newArr=====>', newArr)
            arr = newArr
        }
        return newArr
    }
}
