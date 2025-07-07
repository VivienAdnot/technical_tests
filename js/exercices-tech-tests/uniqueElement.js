// Énoncé :
// Tu as un tableau avec des doublons.
// Écris une fonction JS native (sans Set) qui retourne un tableau
// avec uniquement les éléments uniques, dans l’ordre d’apparition.

// ma réponse en moins de 10min

function unique(array) {
    const seen = [];
    for (let item of array) {
        if (seen.indexOf(item) === -1) {
          seen.push(item);
        }
    }
    return seen
}

const input = [1, 2, 2, 3, 1, 4];
//unique(input); // doit renvoyer : [1, 2, 3, 4]
console.log(unique(input)); // doit renvoyer : [1, 2, 3, 4]

// Analyse de ma solution
// Complexité : O(n²) dans le pire cas (à cause de .indexOf dans une boucle)

// Amélioration possible :
// Utiliser un objet pour stocker les éléments uniques et éviter les doublons
// Complexité : O(n) dans le meilleur cas

function uniqueFastReadable(arr) {
  const seen = {};

  return arr.filter((x) => {
    if (seen[x]) {
      return false; // déjà vu, on ne garde pas
    } else {
      seen[x] = true; // première fois qu'on voit x
      return true;
    }
  });
}
