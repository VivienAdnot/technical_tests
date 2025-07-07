function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = () => {
  return `Hi, my name is ${this.name}`;
}

// la arrow function ne capture pas le this dynamiquement
// elle capture le this du contexte d'exécution, qui est global ici

const person1 = new Person('Alice');
console.log(person1.sayHi()); // Output: Hi, my name is undefined

