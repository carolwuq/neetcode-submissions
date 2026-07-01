class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        //sort by the start date
        intervals.sort((a, b) => a[0] - b[0]);
        // in the loop return the new array
        let output = [];
        output.push(intervals[0])

        for (const interval of intervals){
            //merge: start vs previous end is bigger
            // then push the new one
            //else merge
            let start = interval[0]
            let end = interval[1]
            let lastEnd = output[output.length-1][1]
            if (start > lastEnd) {
                output.push(interval)
            } else {
                output[output.length -1][1] = Math.max(end, lastEnd)
            }
        }

        return output;
    }
}
