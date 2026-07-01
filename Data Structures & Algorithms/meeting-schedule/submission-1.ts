/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        //check if there is any overlapping
        //next start time is smaller or same as previous end time

        //sort array of object
        intervals.sort((a,b)=>a.start-b.start)
        if (intervals.length < 2) {
            return true
        }
        for (let i = 1; i < intervals.length; i++) {
            //base case is fine
            let curr = intervals[i];
            let prev = intervals[i-1];
            if (curr.start < prev.end) {
                return false
            } else {
                continue;
            }
        }
        return true
    }
}
