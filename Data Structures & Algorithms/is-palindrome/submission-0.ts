class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let arr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');
        let left = 0;
        let right = arr.length - 1
        console.log('arr', arr)
        while(left < right) {
            if (arr[left] == arr[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true
    }

        alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
