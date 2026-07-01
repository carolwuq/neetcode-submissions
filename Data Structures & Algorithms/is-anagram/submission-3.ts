class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let normalizedS = s.split('').sort()
        let normalizedT = t.split('').sort()
        if (normalizedS.length !== normalizedT.length) {
            return false
        }
        for (let i = 0; i< normalizedS.length; i++) {
            if (normalizedS[i] === normalizedT[i]) {
                continue;
            } else {
                return false;
            }
        }
        return true
    }
}
