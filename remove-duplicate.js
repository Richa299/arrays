let nums = [0, 0, 3, 3, 5, 6];
let k = 0;
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] == nums[i + 1]) {
    nums[i + 1] = "_";
    k = i;
  } else {
    if (nums[i] == "_" && nums[k] == nums[i + 1]) {
      nums[i + 1] = "_";
    } else if (nums[k] !== nums[i + 1] && nums[i] == "_") {
      nums[k + 1] = nums[i + 1];
      nums[i + 1] = "_";
      k++;
    }
  }
}
let j = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== "_") {
    j++;
  }
}
console.log(j);
