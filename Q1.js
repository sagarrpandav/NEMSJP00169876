//Explain JavaScript Callback functions and provide a simple example?

// We can pass a function as an argument to another function in Javascript which are called as Callback Functions.
// These functions can be executed instantly or in an asynchronous manner depending on the required logic.

// Example 1

const addNumbers = (num1, num2) => (
    num1 + num2
);


const multiplyNumbers = (num1, num2) => (
    num1 * num2
);

const displayAnswer = (value) => (console.log(value));


const getAndPrintAnswer = (num1, num2, fn1, fn2, fn3, flag) => {
    let result = flag ? fn1(num1, num2) : fn2(num1, num2);
    fn3(result);
}

getAndPrintAnswer(10, 20, addNumbers, multiplyNumbers, displayAnswer, true);
getAndPrintAnswer(10, 20, addNumbers, multiplyNumbers, displayAnswer, false);