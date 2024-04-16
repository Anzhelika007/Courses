#### 05 Closures Advanced

- Understanding context and lexical environments.
- Differences between scope and context.
- The mechanism of lexical environment traversal.
- Connection between function and its lexical environment.
  [link](https://learn.javascript.ru/closure)

Understanding context and lexical environments.
В JavaScript у каждой выполняемой функции, блока кода {...} и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.
Объект лексического окружения состоит из двух частей:
Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

"Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».
«Лексическое окружение» – это объект спецификации: он существует только «теоретически» в спецификации языка для описания того, как все работает. Мы не можем получить этот объект в нашем коде и манипулировать им напрямую.
