// Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;

  do {
    num = prompt('Введите число', 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

// Решение немного сложнее, чем могло бы быть, потому что нам надо обрабатывать null и пустую строку.

// Следовательно, запрашиваем ввод числового значения, пока посетитель его не введёт. И null (отмена) и пустая строка также соответствуют данному условию, потому что при приведении к числу они равны 0.

// После того, как цикл завершится, нам нужно проверить введённое значение на null и пустую строку (вернуть null), потому что после преобразования null в число, функция вернёт 0.
