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

function findZeroSumViaMap(arr, sum = 0) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // если в мапе есть противоположный элемент, кладем в результирующий массив его индекс и индекс текущего элемента
    if (map.has(sum - arr[i])) {
      map.set(arr[i], i);

      result.push(map.get(sum - arr[i]));
      result.push(map.get(arr[i]));
      // и выходим из цикла, т.к. нужна только одна пара индексов
      break;
    }
    // если "пары" еще нет, кладем элемент в мап, ключ - индекс
    map.set(arr[i], i);
  }

  return result;
}

findZeroSumViaMap([1, -2, 3, 4, 5, 2, -1]);
