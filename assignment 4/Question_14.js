// Question 14:
Promise.all([
  Promise.resolve("Promise 1"),
  Promise.reject("Promise 2"),
  Promise.resolve("Promise 3"),
])
  .then(console.log)
  .catch(console.log);

// Output:
// Promise 2
