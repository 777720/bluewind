/**
 * 55 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let MAX = 0;
    for(let i = 0; i < nums.length; ++i) {
        if (i <= MAX) {
            MAX = Math.max(MAX,nums[i] + i);
            if (MAX >= nums.length - 1) {
                return true
            }
        }
    }
    if (MAX < nums.length - 1) {
        return false
    }
    return true;
};
console.log(canJump([0]));
console.log(canJump([1,0,1,0]));
console.log(canJump([0,2,3]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 3, 1, 1, 4]));
