// class Calculator {
//     add(a,b) {
//         return a + b;
//     }

//     multiply(a, b) {
//         return a * b;
//     }

//     divide(a, b) {
//         return a / b;
//     }
// };

// when we want to export single function or varible or array etc then this syntax we use 
// module.exports = Calculator;

/////////////////////////////////


// other way to export value is 

module.exports = class {
    add(a,b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
};