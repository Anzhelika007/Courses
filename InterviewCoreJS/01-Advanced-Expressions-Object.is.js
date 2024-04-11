// - Understanding `Object.is` (optional).
//  Понимание `Object.is`- Статический Object.is()метод определяет, являются ли два значения одним и тем же значением.
console.log(Object.is('1', 1));  // типы
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {})); // ссылки на объекты разные
// Expected output: false

// Syntax
//Object.is(value1, value2)

/* Object.is()определяет, являются ли два значения одним и тем же значением . Два значения являются одинаковыми, если выполняется одно из следующих условий:
- оба `undefined`
- оба `null`
- оба `true` или оба `false`
- обе строки одинаковой длины с одинаковыми символами в одном и том же порядке
- оба одного и того же объекта (это означает, что оба значения ссылаются на один и тот же объект в памяти)
- оба `BigInt` с одинаковым числовым значением
- оба символа, которые ссылаются на одно и то же значение символа
- оба цифры:
  - оба `+0`
  - оба `-0`
  - оба `NaN`
  - или оба ненулевые, не `NaN` и имеют одинаковое значение
*/

// Using Object.is()
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
//Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero -отличие от строгого неравенства ===
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
//!!!!!!!console.log( +0 === -0 );        // true

// Case 3: NaN - отличие от строгого неравенства ===
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
//!!!!!!!console.log( NaN === NaN );         // false