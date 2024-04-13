//Функция всегда получает только копию значения:
function showMessage(from, text) {
  from = '_' + from + '_'; // немного украсим "from"
  console.log( from + ': ' + text );
}
let from = "Аня";
showMessage(from, "Привет"); // _Аня_: Привет
  // значение "from" осталось прежним, функция изменила значение локальной переменной
console.log( from ); // Аня

// Параметры по умолчанию
function showMessage(from, text = "текст не добавлен") {
console.log( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен
showMessage("Аня", "как дела"); // Аня: как дела
showMessage(); // undefined: текст не добавлен


// `Альтернативные параметры по умолчанию` - Иногда имеет смысл присваивать значения по умолчанию для параметров не в объявлении функции, а на более позднем этапе.
// Во время выполнения функции мы можем проверить, передан ли параметр, сравнив его с undefined:
function showMessage(text) {
  // ...
  if (text === undefined) { // если параметр отсутствует
    text = 'пустое сообщение';
  }
  console.log(text);
}
showMessage(); // пустое сообщение
// …Или мы можем использовать оператор ||:
function showMessage(text) {
  // если значение text ложно или равняется undefined, тогда присвоить text значение 'пусто'
  text = text || 'пусто';
}
// Современные движки JavaScript поддерживают оператор нулевого слияния ??. Его использование будет лучшей практикой, 
// в случае, если большинство ложных значений, таких как 0, следует расценивать как «нормальные».
function showCount(count) {
// если count равен undefined или null, показать "неизвестно"
console.log(count ?? "неизвестно");
}
showCount(0); // 0
showCount(null); // неизвестно
showCount(); // неизвестно

// Передача по значению
function modify(x) {
  x = 10;
  console.log(x); // 10
}

let a = 5;
modify(a);
console.log(a); // Outputs: 5

// Передача по ссылке
function modify(obj) {
  obj.key = "modified";
}

let myObj = { key: "original" };
modify(myObj);
console.log(myObj); // Outputs: { key: "modified" }

// Handling a dynamic amount of function parameters
// Вызывать функцию можно с любым количеством аргументов независимо от того, как она была определена.
function sum(a, b) {
  return a + b;
}
console.log( sum(1, 2, 3, 4, 5) );
// Остаточные параметры могут быть обозначены через три точки .... Буквально это значит: «собери оставшиеся параметры и положи их в массив».
//Например, соберём все аргументы в массив args:
function sumAll(...args) { // args — имя массива
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6
// Мы можем положить первые несколько параметров в переменные, а остальные – собрать в массив
function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Юлий Цезарь
  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log( titles[0] ); // Консул
  console.log( titles[1] ); // Император
  console.log( titles.length ); // 2
}
showName("Юлий", "Цезарь", "Консул", "Император");

// Все аргументы функции находятся в псевдомассиве `arguments` под своими порядковыми номерами.
function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );
  // Объект arguments можно перебирать
  // for (let arg of arguments) console.log(arg);
  //!!!!!!!!!!!!!!!!!!!arguments.map(...) - НЕЛЬЗЯ НЕ ПОДДЕРЖИВАЕТ МЕТОДЫ МАССИВА только преобразовав Array.from(arguments).map((x)=> console.log(x))
  //Array.from(arguments).map((x)=> console.log(x))
}

// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");

// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");


// `!!! Стрелочные функции не имеют "arguments"`  
// Если мы обратимся к arguments из стрелочной функции, то получим аргументы внешней «нормальной» функции.

function f() {
  let showArg = () => console.log(arguments[0]);
  showArg(2);
}

f(1, 5); // 1