let nums = [1, 2];
let missingNumber = 0;
if (nums.length == 1 && nums[0] !== 0) {
  return 0;
}
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i; j < nums.length - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] !== 0 && i == 0) {
    missingNumber = i;
    break;
  }
  if (nums[i + 1] - nums[i] != 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log(missingNumber);
