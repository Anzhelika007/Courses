// Переменные, объявленные внутри функции, видны только внутри этой функции.

function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная
  console.log( message );
}
showMessage(); // Привет, я JavaScript!
console.log( message );// <-- будет ошибка, т.к. переменная видна только внутри функции

// У функции есть доступ к внешним переменным, например:
let userName = 'Вася';
function showMessage() {
  let message = 'Привет, ' + userName;
  console.log(message);
}
showMessage(); // Привет, Вася

// Функция обладает полным доступом к внешним переменным и может изменять их значение.
let userName1 = 'Вася';
function showMessage() {
  userName1 = "Петя"; // (1) изменяем значение внешней переменной
  let message = 'Привет, ' + userName1;
  console.log(message, 'func');
}
console.log( userName1 ); // Вася перед вызовом функции
showMessage();
console.log( userName1 ); //!!!!!  Петя, значение внешней переменной было изменено функцией.
//!!!!!!!!!!!!! Функция всегда получает только копию значения в качестве аргумента:
let userName2 = 'Вася';
function showMessage(userName2) {
  userName2 = "Петя"; // (1) изменяем значение внешней переменной
  let message = 'Привет, ' + userName2;
  console.log(message, 'func');
}
console.log( userName2 ); // Вася перед вызовом функции
showMessage(userName2 ); // Петя
console.log( userName2 ); // !!!!!! ВАСЯ, значение внешней переменной было изменено функцией.