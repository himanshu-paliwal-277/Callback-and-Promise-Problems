function makeTea() {
  return new Promise((resolve) => {
    console.log("Start making tea...");
    setTimeout(() => {
      resolve("Tea is ready");
    }, 2000);
  });
}

let tea = makeTea();
tea.then((value) => console.log(value));