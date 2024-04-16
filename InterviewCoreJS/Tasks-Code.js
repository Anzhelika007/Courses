let obj = { a: 1 };

function f(o) {
    console.log(o);
    console.log(Object.is(o, obj));
    o = { hello: 1 };
    console.log(Object.is(o, obj));
    console.log(o);
}

f(obj);

console.log(obj);