function compressRepeats(str) {
  let map = new Map();

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let result = [];

  map.forEach((key, value) => {
    resArr.push(value, key);
  });

  return result.join('');
}

console.log(compressRepeats('aaabbc'));

// вариант без Map

function compress(str) {
  let result = [];

  let value = str[0];
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (value !== current) {
      result.push(value, counter);
      value = current;
      counter = 1;
    } else {
      counter++;
    }
  }

  result.push(value, counter);

  return result.join('');
}

console.log(compress('aaabbc'));
