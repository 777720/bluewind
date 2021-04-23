/**
 * @param {number[]} nums
 * @return {number}
 */
 const lengthOfLIS = (nums) => {
    // 1. 设置数组长度
    const length = nums.length;
  
    // 2. 设置存储结果的数组
    const dp = Array.from(Array(length), () => 1);
    
    // 3. 设置最大子序列长度
    let result = 1;
  
    // 4. 遍历比对值
    for (let i = length - 1; i > -1; i--) {
      // 4.1 将当前值和后面的值比对
      for (let j = i + 1; j < length; j++) {
          console.log('i:', i)
          console.log("j:", j)
          
        // 4.2 如果后面的值大于当前值，说明可以进场
        if (nums[j] > nums[i]) {
            console.log("da:")
            console.log(`i: ${i}, j: ${j}`)
          // 4.3 更新 dp 数组
          console.log('修改前dp,', dp);
          dp[i] = Math.max(dp[j] + 1, dp[i]);
          console.log(`修改后dp[${i}] = ${dp[i]}`)
          console.log('修改前dp,', dp);
          // 4.4 如有必要更新最大值
          if (dp[i] > result) {
            result = dp[i]
          }
        }
        console.log("--------")
      }
    }
    // 5. 返回最大值
    return result;
  };
  
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  
  console.log(lengthOfLIS(nums));
  
