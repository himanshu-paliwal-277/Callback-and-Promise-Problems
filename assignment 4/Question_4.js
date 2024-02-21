// Question 4:
let promise = Promise.resolve(1);
promise.then((value) => value + 2).then((value) => console.log(value));

// Output:
// 3
