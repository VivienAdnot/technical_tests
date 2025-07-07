// Écris une fonction makeCounter() qui retourne un objet avec deux méthodes :
//.next() ➝ incrémente et retourne la valeur
// .reset() ➝ remet la valeur à 0

function makeCounter() {
    let iterator = 0;
    return {
        next: function() {
            iterator++;
            return iterator;
        },
        reset: function() {
            iterator = 0;
        }
    };
}

const count = makeCounter();
console.log(count.next()); // → 1
console.log(count.next()); // → 2
console.log(count.next()); // → 3
count.reset();

console.log(count.next()); // → 1
console.log(count.next()); // → 2
console.log(count.next()); // → 3