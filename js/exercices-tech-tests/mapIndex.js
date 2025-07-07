// Énoncé :
// Écris une fonction qui prend un tableau et renvoie un nouveau tableau où chaque valeur est multipliée par son index.

// ma solution:

function multiplyByIndex(arrayInput) {
  return arrayInput.map((item, index) => {
    return item * index;
  });
}
const arr = [1, 2, 3, 4, 5];
console.log(multiplyByIndex(arr)); // → [0, 2, 6, 12, 20]