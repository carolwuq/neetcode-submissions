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
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        //return the minimum count of rooms
        //each room no conflict
        //room array[[], []]
        //[[ending], [ending]] 
        //step 1: sort intervals by start time
        //step 2: create array of rooms record ending time
        //        have a base time
        //        inside of each for loop(intervals), loop the ending time,
    //            if curr.start >= ending. then update ending time
    //            if curr.start < ending, go to next number in rooms, 
    //            if ending time not updated, then add the curr.end as the new number
    //          return rooms.length
        if (intervals.length === 0) {
            return 0;
        }
        intervals.sort((a, b) => a.start - b.start)

        let rooms = [intervals[0].end];
        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];
            let updated = false
            for (let j = 0; j < rooms.length; j++) {
                if (curr.start >= rooms[j]) {
                    rooms[j] = curr.end
                    updated = true;
                    break;
                } else {
                    continue;
                }
            }
            if (!updated) {
                rooms.push(curr.end)
            }
        }
        return rooms.length


    }



}
