let nums = [-2, -3, -7, -2, -10, -4];
let largestSum = nums[0];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
  if (largestSum < sum) largestSum = sum;
  if (sum < 0) sum = 0;
}
console.log(largestSum);
