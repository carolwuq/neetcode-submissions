class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
            //__[__]__[__]__[___]___[]_______
        //1: sort by start time
        //2: overlap: curr.start < prev.end
        //            find bigger end, remove bigger end. count++
        //   no overlap, continue
        //return count
        intervals.sort((a, b)=> a[0] - b[0])

        let count = 0;
        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];
            let prev = intervals[i-1];
            if (curr[0] < prev[1]) {
                const longerMeetingIndex = curr[1] >= prev[1] ? i : i-1
                intervals.splice(longerMeetingIndex, 1)
                i--;
                count++;
            } else {
                continue;
            }
        }
        return count
    }


}