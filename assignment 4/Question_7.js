// Question 7:
Promise.resolve(2)
  .then((value) => value * 2)
  .then((value) => Promise.resolve(value * 2))
  .then((value) => console.log(value));

// Output:
// 8
