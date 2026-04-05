let nums = [7, 2, 1, 9, 8];
let max1 = 0;
let max2 = 0;
if (nums.length > 2) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1 && i == 0) {
      max1 = nums[i];
    } else if (i !== 0) {
      if (nums[i] > max1) {
        max1 = nums[i];
      } else if (nums[i] > max2 && max1 !== nums[i]) {
        max2 = nums[i];
      }
    }
  }
}
if (max2 == 0) console.log(-1);
console.log(max2);
