let nums = [1, 2, 3, 4, 5];
let temp = nums[0];
let i = 0;
for (i = 0; i < nums.length - 1; i++) {
  nums[i] = nums[i + 1];
}
nums[i] = temp;
console.log(nums);
