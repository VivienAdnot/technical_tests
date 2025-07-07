
// ================================================================================================
// bind + arrow function
// ================================================================================================

const badObject = {
  name: 'vivien',
  getName: () => this.name // using an arrow function, which does not bind 'this' to the object
};

// Using an arrow function to call the method on the object
const arrowFnBad = () => badObject.getName();
console.log(arrowFnBad()); // This will return undefined because 'this' is not bound

// ================================================================================================
// Bind + new
// ================================================================================================

console.log('Bind + new');

function User(name) {
  this.name = name;
}

const user1 = new User('vivien');
console.log(user1.name); // Output: vivien

const BoundUser = User.bind({}); // Binding User to an empty object
const user1Bound = new BoundUser('vivien');
// new l'emporte
// bind({}) est ignoré pour this car l'opérateur new crée un nouveau contexte

console.log(user1Bound.name); // Output: vivien

// ================================================================================================
// Bind + new + arrow function
// ================================================================================================

console.log('Bind + new + arrow function');

const UserX = function(name) {
  this.name = name;
  this.sayName = () => {
    return this.name;
  };
};

const u1 = new UserX('Bob');
console.log(u1.sayName()); // Output: Bob

const u2 = {
  name: 'Thomas',
  sayName: u1.sayName.bind({ name: 'Fake' }) // Binding the method to u1
}

console.log(u2.sayName()); // Output: Bob

// sayName est une arrow function, donc elle capture le this du constructeur UserX
// ici this est u1
// donc le binding Fake n'a pas d'effet sur le résultat car bind sur arrow function est ignoré
// arrow function bind statique