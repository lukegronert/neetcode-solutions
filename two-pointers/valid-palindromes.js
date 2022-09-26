// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// @param {string} s
// @return {boolean}

 var isPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length-1;
    const alphaNum = (char) => {
        return 'A'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0) ||
                'a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0) ||
                '0'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0)
    }
    while(p1 < p2) {
        while(!alphaNum(s[p1]) && p1<p2) {
            p1+=1
        }
        while(!alphaNum(s[p2]) && p1<p2) {
            p2-=1
        }
        if(s[p1].toLowerCase() !== s[p2].toLowerCase()) {
            console.log('FALSE p1' + p1 + ' p2' + p2)
            return false
        } else {
            console.log('TRUE p1' + p1 + ' p2' + p2)
            p1+=1;
            p2-=1;
        }
    }
    return true;    
};

//Faster Solution, a lot more memory efficient

var isPalindrome = function(s) {
    s=s.toLowerCase()
    let p1 = 0;
    let p2 = s.length-1;
    
    const isValidCharacter = (char) => {
        const validChar = 'abcdefghijklmnopqrstuvwxyz0123456789'
        return validChar.includes(char)
    }
    
    while(p1<p2) {
        while(!isValidCharacter(s[p1]) && p1<p2) {
            p1++
        }
        while(!isValidCharacter(s[p2]) && p1<p2) {
            p2--
        }
        if(s[p1] !== s[p2]) {
            return false
        }
        p1++
        p2--
    }
    return true
};

//one month later
var isPalindrome = function(s) {
    s=s.toLowerCase();
    const isValidChar = (char) => {
        let validChar = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return validChar.includes(char);
    };
    let p1=0
    let p2=s.length-1;
    while(p1<p2) {
        while(!isValidChar(s[p1]) && p1<p2) {
            p1++
        }
        while(!isValidChar(s[p2]) && p1<p2) {
            p2--
        }
        if(s[p1] !== s[p2]) {
            return false;
        }
        p1++
        p2--
    }
    return true
};

//two months later
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const isValidChar = (char) => {
        let validChar = 'abcdefghijklmnopqrstuvwxyz0123456789';
        if(validChar.includes(char)) {
            return true
        }
        return false;
    }
    let p1 = 0;
    let p2 = s.length-1;
    while(p1<p2) {
        while(!isValidChar(s[p1]) && p1<p2) {
           p1++
        }
        while(!isValidChar(s[p2]) && p1<p2) {
            p2--
        }
        if(s[p1] !== s[p2]) {
            return false
        }
        p1++
        p2--
    }
    return true;
};