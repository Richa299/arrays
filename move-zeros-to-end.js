let arr = [0, 1, 4, 0, 5, 2];
let k = 0;
let j = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[k] !== 0) {
    k++;
    j++;
  } else {
    if (arr[k] == 0 && arr[j] !== 0 && j < arr.length) {
      let temp = arr[k];
      arr[k] = arr[j];
      arr[j] = temp;
      k++;
      j++;
    } else if (arr[i] == 0 && arr[j] == 0 && j < arr.length) {
      j++;
    }
  }
}
console.log(arr);
