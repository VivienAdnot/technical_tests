// Écris une fonction qui retourne un itérateur qui génère des nombres entiers à partir de 1
// en les incrémentant à chaque appel.
// L’appel suivant donne le prochain entier, sans limite supérieure

function* counter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const c = counter();
console.log(c.next().value); // 1
console.log(c.next().value); // 2
console.log(c.next().value); // 3