// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
 
// Constraints:
// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// @param {number[]} nums
// @param {number} k
// @return {number[]}

 var topKFrequent = function(nums, k) {
    let map = {};
    let results = [];
    for (let i=0;i<nums.length;i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    let values = Object.values(map)
    let keys = Object.keys(map)
    for(let i=0;i<k;i++) {
        let max = Math.max(...values);
        let index = values.indexOf(max)
        results.push(keys[index])
        values[index] = 0;
    }
    return results;
};

//two months later
var topKFrequent = function(nums, k) {
    let map = {};
    let results = []
    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] =  1;
        }
    }
    let values = Object.values(map);
    let keys = Object.keys(map);
    for (let i=0; i<k; i++) {
        let max = Math.max(...values);
        let index = values.indexOf(max)
        results.push(keys[index]);
        values[index] = 0;
    }
    return results;
};