// Question 10:
let promise = Promise.resolve(Promise.resolve("Resolve"));
promise.then((res) => console.log(res));

// Output:
// Resolve
