class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //make the string into array. sort, then compare each array if same , return true
        let normalizedS = s.split('').sort();
        let normalizedT = t.split('').sort();
        if (normalizedS.length !== normalizedT.length) {
            return false
        }
        for (let i = 0; i < normalizedT.length; i++) {
            if (normalizedT[i] == normalizedS[i]) {
                continue;
            } else {
                return false;
            }
        }
        return true
    }
}
