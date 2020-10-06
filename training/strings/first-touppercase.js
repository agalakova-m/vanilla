// Сделать первый символ заглавным

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например: ucFirst("вася") == "Вася";

function ucFirst(str) {
  return str.length ? (str = str[0].toUpperCase() + str.slice(1)) : str;
}

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
// тесты:
// Переводит первый символ в верхний регистр
// Не умирает на пустых строках
