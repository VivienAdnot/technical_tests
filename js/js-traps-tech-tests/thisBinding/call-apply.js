function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}
const user = { name: 'vivien' };

const resultWithCall = greet.call(user, 'Hello', '!'); // Using call to invoke greet with user context
console.log(resultWithCall); // Output: Hello vivien!

const resultWithApply = greet.apply(user, ['Hi', '?']); // Using apply to invoke greet with user context
console.log(resultWithApply); // Output: Hi vivien?

// es6 spread operator
args = ['Hey', '.'];
const resultWithSpread = greet.call(user, ...args); // Using spread operator
console.log(resultWithSpread); // Output: Hey vivien.