// console.log(arguments);
// console.log(require("module").wrapper);

// this C variable here which is uppecase because for class (exporting a class here) we usually always use uppercase names.

// module.exports
const C = require("./test-module-1");

// calc1 is instance of C(). Mean create a object of C()
const calc1 = new C(); 
console.log(calc1.add(2,3));

// exports 
// here require function return a object.
// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(add(2, 5));
console.log(multiply(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
