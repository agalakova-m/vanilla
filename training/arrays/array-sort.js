function sortArray(arr) {
  arr.sort((a, b) => a - b);
}

function sortArray(arr) {
  arr.sort((a, b) => b - a);
}

function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
