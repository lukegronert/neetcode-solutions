// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []
 
// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// @param {number[]} nums
// @return {number[][]}

 var threeSum = function(nums) {
    let results = [];
    nums=nums.sort((a,b) => a-b)
    let l;
    let r;
    
    for(let i=0;i<nums.length;i++) { //[-4,-1,-1,0,1,2]
        if(i>0 && nums[i]===nums[i-1]) {
            continue
        }
        let sum=0;
        l=i+1
        r=nums.length-1
        
        while(l<r) {
            sum=nums[i]+nums[l]+nums[r];
            if(sum === 0) {
                results.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                
                while(l<r && nums[l]===nums[l-1]) {
                    l++;
                }
                while(l<r && nums[r]===nums[r+1]) {
                    r--;
                }
            } else if (sum<0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return results;
}

// one month

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let result = [];
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] > 0) {
            return result;
        }
        if(nums[i] === nums[i-1]) {
            continue;
        }
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            if(nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                
                while(nums[left] === nums[left-1]) {
                    left++
                }
                while(nums[right] === nums[right+1]) {
                    right--
                }
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else if (nums[i] + nums[left] + nums[right]) {
                left++
            }
        }
    }
    return result;
};