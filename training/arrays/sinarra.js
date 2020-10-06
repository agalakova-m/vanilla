// Дан массив чисел, найти индексы первой пары чисел, в сумме дающих ноль
// [1, -2, 3, 4, 5, 2, -1] => [1, 5]

function findZeroSumPair(arr) {
  let hash = {};
  let result = [];

  for (let i in arr) {
    let opposite = -arr[i];

    if (opposite in hash) {
      result.push(parseInt(hash[opposite]), parseInt(i));
    }

    if (result.length) break;

    hash[arr[i]] = i;
  }

  return result;
}
