function makeTea() {
  return new Promise((resolve) => {
    console.log("Start making tea...");
    setTimeout(() => {
      resolve("Tea is ready");
    }, 2000);
  });
}

function makeToast() {
  return new Promise((resolve) => {
    console.log("Start making Toast...");
    setTimeout(() => {
      resolve("Toast is ready!");
    }, 3000);
  });
}

function prepareBreakfast() {
  console.log("Start making breakfast...");
  makeTea()
    .then((makeTeaValue) => {
      console.log(makeTeaValue);
      return makeToast();
    })
    .then((makeToastValue) => {
      console.log(makeToastValue);
      console.log("Breakfast is ready!");
    })
    .catch((err) => {
      console.log("Error during breakfast preparation: ", err);
    });
}

// Let's Make a breakfast:
prepareBreakfast();