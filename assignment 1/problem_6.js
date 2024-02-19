// Problem 6:

setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => console.log("C"), 500);
  }, 1000);
}, 1500);

// Output:
// A
// B
// C
