#### 02 Functions

- Differences and uses of arrow functions, function expressions, and function declarations.

#### Function Declaration

Синтаксис

```
function `имя`(`параметры`) {
  `...тело...`
}
```

Пример:

```
function showMessage() {
  console.log( 'Всем привет!' );
}
showMessage(); //- вызов
```

Переменные, объявленные внутри функции, видны только внутри этой функции

#### Function Expression

Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
Синтаксис

```
let func = (arg1, arg2, ...argN) => expression;
let sum = (a, b) => a + b;
let double = n => n * 2;
```

Поскольку создание функции происходит в контексте выражения присваивания (с правой стороны от =), это Function Expression.
Обратите внимание, что после ключевого слова function нет имени. Для Function Expression допускается его отсутствие.
Здесь мы сразу присваиваем её переменной, так что смысл этих примеров кода один и тот же: "создать функцию и поместить её в переменную sayHi".
приведённых выше примерах функция хранится в переменной sayHi

#### Arrow functions

Синтаксис

```
let sayHi = function() {
  console.log( "Привет" );
};
```

| Aspect             |               Function Declarations                |              Function Expressions               |                                 Arrow Functions                                  |
| ------------------ | :------------------------------------------------: | :---------------------------------------------: | :------------------------------------------------------------------------------: |
| Syntax             |                 function name() {}                 |           const name = function() {}            |                              const name = () => {}                               |
| Hoisting           |                      Hoisted                       |                   Not hoisted                   |                                   Not hoisted                                    |
| Binding of `this`  |                Binds its own `this`                |              Binds its own `this`               |                                 Inherits `this`                                  |
| `arguments`, `new` |                      There is                      |                    There is                     |                                   There is not                                   |
| Use Cases          | General-purpose, can be<br>used before declaration | Assigning to variables,<br>passing as arguments | Short, concise functions,<br>especially in array methods or<br>as event handlers |
