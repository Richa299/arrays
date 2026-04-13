let nums1 = [3, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let nums2 = [1, 9, 9, 9, 9, 9];
let setArr = new Set();
let arr = [];
let r = 0;
let k = 0;
let j = 0;
while (k < nums1.length && j < nums2.length) {
  if (nums1[k] < nums2[j]) {
    setArr.add(nums1[k]);
    k++;
  } else if (nums1[k] > nums2[j]) {
    setArr.add(nums2[j]);
    j++;
  } else if (nums1[k] == nums2[j]) {
    setArr.add(nums1[k]);
    k++;
    j++;
  }
}
while (k < nums1.length) {
  setArr.add(nums1[k]);
  k++;
}
while (j < nums2.length) {
  setArr.add(nums2[j]);
  j++;
}
arr = [...setArr];
console.log(arr);
