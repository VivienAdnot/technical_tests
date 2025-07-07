// Énoncé :
// Écris une fonction qui prend un tableau potentiellement imbriqué à plusieurs niveaux et renvoie un tableau plat.

// ma solution en 6min et 5 itérations:

function flat(arrayInput) {
    const result = [];
    for (let item of arrayInput) {
        let flattened;
        if (Array.isArray(item)) {
            flattened = flat(item);
        } else {
            flattened = [item]
        }
        result.push(...flattened);
    }
    return result;
}

flatten([1, [2, [3, 4], 5]]); // → [1, 2, 3, 4, 5]


// solution avec une complexité plus faible:

function flat5Opt(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      const nested = flat5Opt(item);
      for (const val of nested) result.push(val); // 👈 remplacement du spread
    } else {
      result.push(item);
    }
  }
  return result;
}
