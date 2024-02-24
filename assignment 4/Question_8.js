// Question 8:
Promise.reject("Initial Error")
  .catch((err) => {
    throw new Error("New Error");
  })
  .catch((err) => console.log(err.message));

// Output:
// New Error
