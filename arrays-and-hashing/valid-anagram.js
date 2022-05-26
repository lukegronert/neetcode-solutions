// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// @param {string} s
// @param {string} t
// @return {boolean}

 var isAnagram = function(s, t) {
    s = s.split('')
    s = s.sort()
    s = s.join('')
    t = t.split('')
    t = t.sort()
    t = t.join('')
    return s === t ? true : false
};