console.log(someVariable); // ReferenceError: someVariable is not defined ReferenceError- ошибка ссылки
let someVariable = 10;
/* В этом примере мы пытаемся зарегистрировать значение someVariableперед его объявлением с помощью let. 
Поскольку someVariableон находится во временной мертвой зоне, мы получаем ошибку ReferenceError.*/


let anotherVariable = 20;
console.log(anotherVariable); // 20

/* В этом примере мы получаем доступ anotherVariableпосле того, как он был объявлен, поэтому он больше не находится во временной мертвой зоне, 
и мы получаем ожидаемый результат 20.*/