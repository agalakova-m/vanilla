// Реализуйте возможность, используя прототип, чтобы у каждого массива был новый метод, позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, что:
// 1. Для чисел это возведение в квадрат
// 2. Для строк это удваивание строки
// 3. Метод не изменяет существующий массив, возвращает новый

// Пример:
// [1, 2, 3] => [1, 4, 9]
// [5, 'Hello', 6] => [25, 'HelloHello', 36]

var a = [1, 2, 3];
var b = [5, 'Hello', 6];

Array.prototype.double = function () {
  console.log(this); // this указывает на текущий массив
  var newArr = this.map(function (item) {
    if (typeof item === 'number') {
      return Math.pow(item, 2);
    }
    if (typeof item === 'string') {
      return (item += item);
    }
  });
  return newArr;
};

var newA = a.double();
var newB = b.double();

console.log('A', newA);
console.log('B', newB);
