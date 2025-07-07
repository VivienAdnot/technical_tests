// Énoncé :
// Tu dois écrire une fonction qui supprime toutes les valeurs falsy d’un tableau.
// Pas de lib, pas de Boolean en raccourci. Natif only.

// ma solution

function falsyFilter(arrayInput) {
  return arrayInput.filter(item => !!item);
}

const arr = [0, 1, false, 2, '', 3, null, undefined, NaN];
console.log(falsyFilter(arr)); // → [1, 2, 3]

// solution plus verbeuse

function falsyFilterVerbose(arr) {
  return arr.filter(item => item !== false && item !== 0 && item !== "" && item != null && !Number.isNaN(item));
}
console.log(falsyFilterVerbose(arr)); // → [1, 2, 3]