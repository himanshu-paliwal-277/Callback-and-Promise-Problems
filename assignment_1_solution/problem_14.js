// Problem 14:

for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}

// Output:
// 0
// 1
// 2