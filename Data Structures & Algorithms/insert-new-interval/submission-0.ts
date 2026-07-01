class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        //intervals are sorted. 
        //_____[____]__{______}__[___]__[]
        //step 1: Push Left: if intervals[i] end < newInterval start, then push the intervals to the new array
        //step 2: Merge(iterable): Once newInterval end >= intervals start
        //         key is to reset the newInterval and only put the newInterval when done merging     
        //step 3: Push Right: push the intervals, start > newInterval's start
        let arr = [];
        let i = 0;
        let n = intervals.length;
        while (i < n && intervals[i][1] < newInterval[0]) {
            arr.push(intervals[i]);
            i++
        }
        console.log('i before currInterval', i)
        
        while(i < n && newInterval[1] >= intervals[i][0]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]) 
            i++;
        }
        arr.push(newInterval)
        
        while (i < n && newInterval[1] < intervals[i][0]) {
            arr.push(intervals[i]);
            i++;
        }
        console.log('after i< n, arr========>', arr)
        return arr
    }
}
