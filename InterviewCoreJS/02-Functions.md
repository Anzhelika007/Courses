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
let sayHi = function() {
  console.log( "Привет" );
};
```

Поскольку создание функции происходит в контексте выражения присваивания (с правой стороны от =), это Function Expression.
Обратите внимание, что после ключевого слова function нет имени. Для Function Expression допускается его отсутствие.
Здесь мы сразу присваиваем её переменной, так что смысл этих примеров кода один и тот же: "создать функцию и поместить её в переменную sayHi".
приведённых выше примерах функция хранится в переменной sayHi

| Aspect            |               Function Declarations                |              Function Expressions               |                                 Arrow Functions                                  |
| ----------------- | :------------------------------------------------: | :---------------------------------------------: | :------------------------------------------------------------------------------: |
| Syntax            |                 function name() {}                 |           const name = function() {}            |                              const name = () => {}                               |
| Hoisting          |                      Hoisted                       |                   Not hoisted                   |                                   Not hoisted                                    |
| Binding of `this` |                Binds its own `this`                |              Binds its own `this`               |                                 Inherits `this`                                  |
| Use Cases         | General-purpose, can be<br>used before declaration | Assigning to variables,<br>passing as arguments | Short, concise functions,<br>especially in array methods or<br>as event handlers |
