//using moore's algorithm
let nums = [2, 2, 1, 1, 1, 2, 2];
let count = 0;
let element = 0;
for (let i = 0; i < nums.length; i++) {
  if (count == 0) {
    element = nums[i];
    count++;
  } else if (element !== nums[i]) {
    count--;
  } else if (element == nums[i]) {
    count++;
  }
}
console.log(element);
