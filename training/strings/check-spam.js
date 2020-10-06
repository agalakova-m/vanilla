// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру

function checkSpam(str) {
  if (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra'))
    return true;
  return false;
}

// короче

function checkSpam(str) {
  return (
    str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')
  );
}
