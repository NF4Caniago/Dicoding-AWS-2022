console.log("Hello World")
2 + 5; //ini expresion
//ini comment ygy
/*
adasdasdasd
*/

let lastName = (name = "afif")
console.log(lastName)
console.log(name)

const fullName = "afif ilham caniago"
//fullName = "hehe"

let age
console.log(typeof(age))

let x = 10 % 3
let y = 4 ** 2
console.log(x++)
console.log(++y)
console.log(x)

let z = x++
console.log(z)
console.log(x)

//big int
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

console.log("Windows path: C:\\Program Files\\MyProject");

const myName = "afif"
console.log(`hello, my name is ${myName}`)

x = x > y
y = x < y
console.log(`x = ${x} and y = ${y}`)

x = null
console.log(x)

const idAfif = Symbol("idAfif")
console.log(idAfif);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
