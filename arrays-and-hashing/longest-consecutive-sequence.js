// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// @param {number[]} nums
// @return {number}

 var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let max = 0;
    for(let num of set) {
        if(set.has(num-1)) {
            continue
        }
        let currNum = num;
        let currMax = 1;
        while(set.has(currNum+1)) {
            currNum++;
            currMax++
        }
        max = Math.max(max, currMax)
    }
    return max;
};

//one month later
var longestConsecutive = function(nums) {
    nums.sort((a,b) => a-b)
    let result = 0;
    let curr = 1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i+1] === nums[i]) {
            continue
        } else if (nums[i+1] === nums[i]+1) {
            curr += 1;
        } else if (nums[i+1] !== nums[i]+1) {
            result = Math.max(result, curr);
            curr = 1;
        }
    }
    return result
};

//two months later
var longestConsecutive = function(nums) {
    if(nums.length < 1) {
        return 0;
    }
    nums.sort((a,b) => a-b);
    let currSeq = 1;
    let max = 1;
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            continue
        } else if (nums[i]+1 === nums[i+1]) {
            currSeq++;
        } else {
            console.log(currSeq)
            max = Math.max(max, currSeq);
            currSeq = 1;
        }
    }
    return max;
};

//two months late optimal solution with Hash Set
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let max = 0;
    for(let num of set) {
        // if set has num-1, we have already accounted for it in a previous sequence
        if(set.has(num-1)) {
            continue;
        }
        let currNum = num;
        let currMax = 1;
        while(set.has(currNum+1)) {
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax)
    }
    return max;
};