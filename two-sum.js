let nums = [1, 6, 2, 10, 3];
let target = 7;
let mapp = new Map();
for (let i = 0; i < nums.length; i++) {
  if (mapp.has(target - nums[i])) {
    console.log([mapp.get(target - nums[i]), i]);
    break;
  } else {
    mapp.set(nums[i], i);
  }
}
