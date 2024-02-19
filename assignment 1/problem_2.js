// Problem 2:

setTimeout(() => {
  console.log("A");
  setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");

// Output:
// C
// A
// B