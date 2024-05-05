async function prepareFullBreakfast() {
  console.log("Start preparing breakfast...");
  try {
    let result = await Promise.all([makeEggs(), makeToast(), makeTea()]);
    result = result.join(", ");
    console.log(result);
    console.log("Full breakfast is ready!");
  } catch (error) {
    console.log("An error occurred while preparing breakfast ", error);
  }
}

function makeEggs() {
  return new Promise((res) => {
    // console.log("Start making eggs...");
    let time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      res("Eggs are ready!");
    }, time);
  });
}

function makeToast() {
  return new Promise((res) => {
    // console.log("Start making toast...");
    let time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      res("Toast is ready!");
    }, time);
  });
}

function makeTea() {
  return new Promise((res) => {
    // console.log("Start making tea...");
    let time = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      res("Tea is ready!");
    }, time);
  });
}

prepareFullBreakfast();
