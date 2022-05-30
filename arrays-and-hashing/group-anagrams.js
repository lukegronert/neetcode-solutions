// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


// @param {string[]} strs
// @return {string[][]}

var groupAnagrams = function(strs) {
    let obj = {}
    let results = []
    for(let word of strs) {
        //create a variable that equals the string of thre sorted word, ex. 'eat' = 'aet'
        let key = word.split('').sort().join('');
        //if obj does not have the key var as a key
        if(!obj[key]) {
            //create it as an array with the word from strs in it
            obj[key] = [word]
        } else {
            //if it has the key, add word to the array associated with that key
            obj[key].push(word)
        }
    }
    //for the keys in obj
    for(let key in obj) {
        //push each key into the results array
        results.push(obj[key])
    }
    return results;
};

// Completed with hashmap instead of obj, similar runtime and memory usage, maybe slightly faster and less memory used
var groupAnagrams = function(strs) {
    let map = new Map();
    let results = []
    for(word of strs) {
        //create a variable that equals the string of thre sorted word, ex. 'eat' = 'aet'
        let key = word.split('').sort().join('');
        //if obj does not have the key var as a key
        if(!map.has(key)) {
            //create it as an array with the word from strs in it
            map.set(key,[word]);
        } else {
            //if it has the key, add word to the array associated with that key
            map.get(key).push(word)
        }
    }
    //for the keys, values of map
    for([key, value] of map) {
        //push each value into the results array
        results.push(value)
    }
    return results
};