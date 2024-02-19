// Problem 11:

function first(callback) { // callback is second()
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);

// Output:
// first
// second