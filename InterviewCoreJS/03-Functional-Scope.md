#### 03 Functional Scope

- Global scope vs. functional scope.
- Variable visibility areas.
- Working with nested scopes.

1. Глобальная область против функциональной области :

- Глобальная область : переменные, объявленные вне какой-либо функции, находятся в глобальной области. Они доступны из любой части вашего кода, включая другие функции.
- Функциональная область : переменные, объявленные внутри функции, находятся в функциональной области. Они доступны только внутри этой функции (включая любые вложенные функции).

2. Переменные области видимости :

- Глобальные переменные : объявлены вне любой функции, они доступны повсюду в вашем коде.
- Локальные переменные : объявлены внутри функции, они доступны только внутри этой функции.
- Переменные с областью действия блока (ES6+) : вводятся с помощью letи const, они ограничены блоком (внутри {}), где они определены, например if, for или while блоки.

3. Работа с вложенными областями :

- Вложенные функции : функции могут быть определены внутри других функций, создавая вложенные области. Внутренние функции имеют доступ к переменным, объявленным во внешних функциях, но обратное неверно.
- Замыкание : когда внутренняя функция обращается к переменным из своей внешней функции, даже после того, как внешняя функция завершила выполнение, она создает замыкание. Замыкания — мощная функция управления состоянием в JavaScript.
  Вот пример, иллюстрирующий эти концепции:

```
// Global scope
let globalVar = "I'm global";

function outerFunction() {
    // Functional scope
    let outerVar = "I'm in outerFunction";

    function innerFunction() {
        // Functional scope (nested)
        let innerVar = "I'm in innerFunction";
        console.log(innerVar);    // Accessible
        console.log(outerVar);    // Accessible
        console.log(globalVar);   // Accessible
    }

    innerFunction();
    // console.log(innerVar);    // Not accessible
    console.log(outerVar);        // Accessible
    console.log(globalVar);       // Accessible
}

outerFunction();
// console.log(outerVar);        // Not accessible
// console.log(innerVar);        // Not accessible
console.log(globalVar);           // Accessible
```

Понимание области действия имеет решающее значение для написания удобного и безошибочного кода JavaScript. Всегда учитывайте область действия переменных при их определении, чтобы избежать неожиданного поведения.

[link](https://learn.javascript.ru/closure)
