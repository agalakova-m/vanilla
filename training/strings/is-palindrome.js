function isPalindrom(str1, str2) {
  return str1.toLowerCase().split('').reverse().join('') === str2;
}

console.log(isPalindrom('dog', 'god'));
