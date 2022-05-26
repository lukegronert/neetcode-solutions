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

//Solution that uses less memory

 var isAnagram = function(s, t) {
    //If the strings are not the same length, they can't be anagrams
    if(s.length !== t.length) {
        return false;
    }
    let sHash = {};
    let tHash = {};
    //Set up hashMap for each string, counting each letter
    for(let i = 0; i<s.length; i++) {
        if(sHash[s[i]]) {
            sHash[s[i]]+=1;
        } else {
            sHash[s[i]] = 1;
        }
    }
    for(let j = 0;j<t.length;j++) {
        if(tHash[t[j]]) {
            tHash[t[j]]+=1;
        } else {
            tHash[t[j]]=1;
        }
    }
    //check the value of each key in both hashmaps
    for(key in sHash) {
        //if they are not equal, they are not anagrams
        if(sHash[key] !== tHash[key]) {
            return false
        }
    }
    return true;  
};