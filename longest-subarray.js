let nums = [10, 5, 2, 7, 1, 9];
let k = 15;
let len = 0;
for (let i = 0; i < nums.length - 1; i++) {
  let sum = 0;
  let currLen = 0;
  for (let j = i; j < nums.length; j++) {
    if (sum == k) {
      currLen = j - i;
      break;
    } else if (sum < k) {
      sum = sum + nums[j];
    }
  }
  if (sum == k && currLen > len) {
    len = currLen;
  }
}
console.log(len);
