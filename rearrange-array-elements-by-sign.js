let nums = [2, 4, 5, -1, -3, -4];
let pos = 0;
let neg = 1;
let arr = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    arr[neg] = nums[i];
    neg = neg + 2;
  } else {
    arr[pos] = nums[i];
    pos = pos + 2;
  }
}
console.log(arr);
