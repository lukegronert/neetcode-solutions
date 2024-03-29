// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// @param {number[]} nums
// @return {boolean}

 var containsDuplicate = function(nums) {
    nums = nums.sort()
    for(let i=0; i<nums.length;i++) {
        if(nums[i] === nums[i+1]) {
            return true
        }
    }
    return false
};

//FASTER SOLUTION USING A HASHSET

var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++) {
        if(set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false
};

// one month later
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0; i<nums.length;i++) {
        set.add(nums[i])
    }
    if(set.size < nums.length) {
        return true
    }
    return false;
};

//two months later
var containsDuplicate = function(nums) {
    const set = new Set();
    for(let i = 0; i<nums.length; i++) {
        set.add(nums[i])
    }
    if(set.size === nums.length) {
        return false;
    }
    return true;
};