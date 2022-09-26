// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
 
// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// @param {number[]} height
// @return {number}

 var maxArea = function(height) {
    let maxArea = 0;
    let l = 0;
    let r = height.length-1;
    while (l<r) {
        if((Math.min(height[l],height[r])*(r-l)) > maxArea) {
            maxArea = Math.min(height[l],height[r])*(r-l);
        }
        if(height[l]<height[r]) {
            l++
        } else {
            r--
        }
    }
    return [maxArea];
};

// one month later
var maxArea = function(height) {
    let maxVol = 0;
    let left = 0;
    let right = height.length-1;
    while(left < right) {
        maxVol = Math.max(maxVol, (Math.min(height[left], height[right])*(right-left)));
        if(height[left] > height[right]) {
            right--
        } else if (height[left] < height[right]) {
            left++
        } else {
            left++
        }
    }
    return maxVol
};

//two months later
var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length-1;
    while(l<r) {
        if(height[l] > height[r]) {
            max = Math.max(max, height[r]*(r-l));
            r--
        } else {
            max = Math.max(max, height[l] * (r-l));
            l++
        }
    }
    return max;
};