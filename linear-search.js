let nums = [2, 3, 4, 5, 3];
let target = 3;
let i = 0;

for (i = 0; i < nums.length; i++) {
  if (nums[i] == target) {
    console.log(i);
    break;
  }
}
if (i == nums.length) console.log(-1);
