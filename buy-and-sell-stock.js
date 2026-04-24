let prices = [10, 7, 5, 8, 11, 9];
let smallest = prices[0];
let largest = 0;
for (let i = 1; i < prices.length; i++) {
  if (smallest < prices[i]) {
    if (largest < prices[i] - smallest) {
      largest = prices[i] - smallest;
    }
  } else {
    smallest = prices[i];
  }
}
console.log(largest);
