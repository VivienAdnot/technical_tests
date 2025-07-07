// Énoncé :
// Écris une fonction qui prend un tableau de nombres et retourne la somme des nombres pairs uniquement.

// ma solution en 9min:

function sumEven(arrayInput) {
    const innerFunction = (accumulator, currentValue) => {
        if (currentValue % 2 === 0) {
            accumulator += currentValue;
        }
        return accumulator;
    }
    return arrayInput.reduce(innerFunction, 0);
}

sumEven([1, 2, 3, 4, 5, 6]); // → 12
console.log(sumEven([1, 2, 3, 4, 5, 6])); // → 12