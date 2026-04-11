let nums = [1, 2, 3, 4, 5, 6];
let k = 2;
let arr = [];
let j = 0;
let rotate = k < nums.length ? k : k % nums.length;
for (let i = 0; i < nums.length; i++) {
  if (i < rotate) {
    arr[nums.length - rotate + i] = nums[i];
  } else {
    arr[j] = nums[i];
    j++;
  }
}
for (let i = 0; i < arr.length; i++) {
  nums[i] = arr[i];
}
console.log(nums);
