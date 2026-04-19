let arr = [4, 4, 2, 1, 2];
let found = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1] && arr[i] !== "") {
    found = true;
    console.log(arr[i]);
    break;
  } else if (arr[i] == arr[i + 1]) {
    arr[i + 1] = "";
  } else if (arr[i] == "") {
    continue;
  }
}
if (!found) console.log(arr[arr.length - 1]);
