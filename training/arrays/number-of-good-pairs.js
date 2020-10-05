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

const numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// Map method

var numIdenticalPairs = function (nums) {
  let map = new Map();
  let count = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  return count;
};

// another Map method

var method2 = function (nums) {
  let map = new Map();
  let count = 0;

  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  for (let m of map) {
    let val = m[1];
    val = val * (val - 1);
    if (val > 0) {
      count += val / 2;
    }
  }

  return count;
};

// 2 line solution using reduce only
// 🤯🤯🤯

var numIdenticalPairs = function (nums) {
  const countArr = Object.values(
    nums.reduce((s, x) => ({ ...s, [x]: s[x] ? s[x] + 1 : 1 }), {}),
  );
  return countArr.reduce((c, x) => (x > 1 ? c + (x * (x - 1)) / 2 : c), 0);
};
