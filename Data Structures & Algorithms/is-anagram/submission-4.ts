class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * ate
     * kat
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }
        let countS = {}
        let countT = {}
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }

        for(const key in countS) {
            console.log('countS[key]', countS[key])
            console.log('countT[key]', countT[key])
            if (countS[key] !== countT[key]) {
                return false
            }
        }
         return true
        
        
        // if (s.length !== t.length) {
        //     return false
        // }
        // let sSort = s.split('').sort().join();
        // let tSort = t.split('').sort().join();
        // return sSort===tSort;
        // let normalizedS = s.split('').sort()
        // let normalizedT = t.split('').sort()
        // if (normalizedS.length !== normalizedT.length) {
        //     return false
        // }
        // for (let i = 0; i< normalizedS.length; i++) {
        //     if (normalizedS[i] === normalizedT[i]) {
        //         continue;
        //     } else {
        //         return false;
        //     }
        // }
        // return true
    }
}
//content, ask ma, use array. 
