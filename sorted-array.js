let nums = [1, 2, 3, 4, 5];
let count = 0;
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] < nums[i + 1]) {
    count++;
  }
}
if (count == nums.length - 1) console.log(true);
else console.log(false);
