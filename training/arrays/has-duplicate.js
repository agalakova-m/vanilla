// Напишите функцию принимающую массив чисел
// и определяющую, есть ли в нем дубликаты.

// Пример 1:
// Input: [1, 2, 3, 4]
// Output: false

// Пример 2:
// Input: [1, 2, 3, 1]
// Output: true

const hasDuplicates = (arr) => arr.length !== [...new Set(arr)].length;
