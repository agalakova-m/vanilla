// Есть ли в массиве пара чисел, которые в сумме дают искомое число?
// hasSum([1, 3, 6, 7], 9) // true, 3 + 6

function hasSum(arr, sum) {
  let hash = {};
  let result = false;

  for (i in arr) {
    let addend = sum - arr[i];
    if (addend in hash) {
      result = true;
    }
    hash[arr[i]] = i;
  }
  console.log(hash);
  return result;
}

hasSum([1, 3, 6, 7], 9);
