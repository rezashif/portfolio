console.log("Arithmetic Operators");

// +, -, *, /, %
let a = 2;
let b = 3;
console.log(a + b); // 5
console.log(a - b); // -1
console.log(a * b); // 6
console.log(a / b); // 0.666
console.log(a % b); // 2

// Increment and Decrement Operators
let c = 5;
console.log(c++); // 5
console.log(c); // 6
console.log(--c); // 5
console.log(c); // 5

// Exponentiation Operator
let d = 2;
console.log(d ** 3); // 8

console.log("Relational Operators");

// >, >=, <, <=, ===, !==, ==, !=
let e = 5;
let f = 3;
console.log(e > f); // true
console.log(e >= f); // true
console.log(e < f); // false
console.log(e <= f); // false
console.log(e === f); // false
console.log(e !== f); // true
console.log(e == f); // false
console.log(e != f); // true

// Equality Operators
let g = "5";
let h = 5;
console.log(g == h); // true
console.log(g === h); // false

console.log("Logical Operators");

// &&, ||, !
let i = true;
let j = false;
console.log(i && j); // false
console.log(i || j); // true
console.log(!i); // false
console.log(!j); // true

// Short-Circuiting
let k = 5;
let l = 0;
console.log(k && l); // 0
console.log(k || l); // 5

console.log("Bitwise Operators");

// &, |, ~, ^
let m = 5;
let n = 3;
console.log(m & n); // 1
console.log(m | n); // 7
console.log(~m); // -6
console.log(m ^ n); // 6

// Shift Operators
let o = 5;
console.log(o << 1); // 10
console.log(o >> 1); // 2
console.log(o >>> 1); // 2

console.log("Assignment Operators");

// =, +=, -=, *=, /=, %=, **=
let p = 5;
p += 3;
console.log(p); // 8
p -= 2;
console.log(p); // 6
p *= 2;
console.log(p); // 12
p /= 2;
console.log(p); // 6
p %= 2;
console.log(p); // 0
p **= 2;
console.log(p); // 0

console.log("Conditional Operator");

// ?
let q = 5;
let r = q > 10 ? "greater" : "lesser";
console.log(r); // "lesser"

console.log("Comma Operator");

// ,
let s = (5, 3);
console.log(s); // 3

console.log("Unary Operators");

// +, -, typeof, void
let t = 5;
console.log(+t); // 5
console.log(-t); // -5
console.log(typeof t); // "number"
console.log(void t); // undefined

console.log("Delete Operator");

// delete
let u = { foo: "bar" };
delete u.foo;
console.log(u); // {}

console.log("in Operator");

// in
let v = { foo: "bar" };
console.log("foo" in v); // true
console.log("baz" in v); // false

console.log("instanceof Operator");

// instanceof
let w = [];
console.log(w instanceof Array); // true
console.log(w instanceof Object); // true

console.log("to string method");
let num=(29).toString()
console.log(typeof(num));

console.log((29).toString());
console.log(typeof((29).toString()));//to check data type
console.log("sign method");
//Math.sign(x) returns if num is negative,
//zero or positive
console.log(Math.sign(8));//1
console.log(Math.sign(-8));//-1

console.log("random number");
console.log(Math.random())