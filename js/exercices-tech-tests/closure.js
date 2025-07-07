// Énoncé :
// Écris une fonction makeCounter() qui retourne une fonction.
// Chaque fois que cette fonction est appelée, elle retourne un nombre qui s’incrémente.

// ma solution en 3min et 2 itérations:

function makeCounter() {
    let iterator = 0;
    return function() {
        iterator++;
        return iterator;
    }
}

const count = makeCounter();

console.log(count()); // → 1
console.log(count()); // → 2
console.log(count()); // → 3

// marche tout aussi bien avec arrow function:

function makeCounter4() {
    let it = 0;
    return () => {
        it++;
        return it;
    }
}

const count4 = makeCounter4();
console.log(count4()); // → 1
console.log(count4()); // → 2
console.log(count4()); // → 3