
// ================================================================================================
// normal function + bind
// ================================================================================================

const obj = {
  name: 'vivien',
  getName() {
    return this.name;
  }
}

// this will return undefined
const fn = obj.getName;
console.log(fn()); // Uncommenting this line will throw an error because 'this' is not bound

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
// bind + direct call + arrow function + call + apply
// ================================================================================================

console.log('bind + direct call + arrow function + call + apply');

// direct call
console.log(obj.getName());

// bind the method to the object
const boundFn = obj.getName.bind(obj);
console.log(boundFn()); // binding the method to the object

const anotherBoundFn = obj.getName.bind({ name: 'bind' });
console.log(anotherBoundFn()); // binding the method to a different object

// arrow function
const arrowFn = () => obj.getName();
console.log(arrowFn()); // using an arrow function to call the method on the object

const arrowFn2 = () => obj.getName({ name: 'arrow' });
console.log(arrowFn2()); // using an arrow function to call the method on the object

// call
const fnWithCall = obj.getName.call({ name: 'call' });
console.log(fnWithCall); // using call to invoke the method with a different context

// This will return 'vivien' as well
const fnWithApply = obj.getName.apply({ name: 'apply' });
console.log(fnWithApply); // using apply to call the method with a different context

