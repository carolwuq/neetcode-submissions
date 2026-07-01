class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        //make the string into array. sort, then compare each array if same , return true
        let normalizedS = s.split('').sort().join('');
        let normalizedT = t.split('').sort().join('');
        if (normalizedS.length !== normalizedT.length) {
            return false
        }
        return normalizedS == normalizedT
    }
}
