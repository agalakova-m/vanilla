// Случайное целое число от min до max

// Напишите функцию `randomInteger(min, max)`, которая генерирует случайное *целое* (integer) число от `min` до `max` (включительно).
// Любое число из интервала `min..max` должно появляться **с одинаковой вероятностью.**

// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// ### Простое, но неправильное решение

// Самое простое, но неправильное решение – генерировать случайное число от `min` до `max` и округлять его:

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

alert(randomInteger(1, 3));

// Функция будет работать, но неправильно. Вероятность получить `min` и `max` значения в 2 раза меньше, чем любое другое число.

// Если вы запустите приведённый выше пример, то заметите, что `2` появляется чаще всего. Это происходит потому, что метод `Math.round()` получает случайные числа из интервала `1..3` и округляет их следующим образом:

// число от 1    ... до 1.4999999999  округлится до 1
// число от 1.5  ... до 2.4999999999  округлится до 2
// число от 2.5  ... до 2.9999999999  округлится до 3

// Теперь становится понятно, что 1 получает в 2 раза меньше значений, чем 2. То же самое с 3.

// ### Правильное решение задачи

// Есть много правильных решений этой задачи. Одно из них – правильно указать границы интервала. Чтобы выровнять интервалы, мы можем генерировать числа от `0.5 до 3.5`, это позволит добавить *необходимые вероятности* к `min` и `max`:

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// alert( randomInteger(1, 3) );

// Другое правильное решение – это использовать Math.`floor` для получения случайного числа от `min` до `max+1`:

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// alert( randomInteger(1, 3) );

// Теперь все интервалы отображаются следующим образом:
// число от 1  ... до 1.9999999999  округлится до 1
// число от 2  ... до 2.9999999999  округлится до 2
// число от 3  ... до 3.9999999999  округлится до 3

// Все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел.
