const arr = ["1", "2", "3"];
const res = arr.map(parseInt);
console.log(res);
// Output: [1, NaN, NaN]

// Explanation:
// The map function calls parseInt with three arguments: the current element, the index, and the array.
// parseInt expects two arguments: the string to convert and the radix (base) for conversion.
// The first call works because parseInt("1") is 1, but the second call fails because parseInt("2", 1) is NaN (base 1 is invalid),
// and the third call fails because parseInt("3", 2) is also NaN (base 2 is invalid for "3").
//// To fix this, you can use a custom function that only passes the first argument to parseInt
const fixedRes = arr.map(num => parseInt(num, 10));
console.log(fixedRes);
// Output: [1, 2, 3]