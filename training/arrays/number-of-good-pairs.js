// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// my solution...

function numIdenticalPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
}

// Map method

function numIdenticalPairs(nums) {
  let map = new Map();
  let count = 0;

  for (let item of nums) {
    // если такой элемент уже есть в мапе
    if (map.has(item)) {
      count += map.get(item);
      map.set(item, map.get(item) + 1);
    } else {
      // 1 - счетчик того, сколько раз встречаем элемент
      map.set(item, 1);
    }
  }
  console.log(map);
  console.log(count);

  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// 2 line solution using reduce only
// 🤯🤯🤯

var numIdenticalPairs = function (nums) {
  const countArr = Object.values(
    nums.reduce((s, x) => ({ ...s, [x]: s[x] ? s[x] + 1 : 1 }), {}),
  );
  return countArr.reduce((c, x) => (x > 1 ? c + (x * (x - 1)) / 2 : c), 0);
};
