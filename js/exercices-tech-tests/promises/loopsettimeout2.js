// Écris une fonction qui prend un mot (string), et qui écrit chaque lettre une par une dans la console,
// avec 1 seconde d’intervalle entre chaque lettre.
// À la fin, affiche "Terminé".

// ma solution en 5min:

function sleep(character) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(character);
      resolve();
    }, 1000);
  });
}

async function writer(word) {
  for (let character of word) {
    await sleep(character);
  }
  console.log("c'est terminé");
}

writer('coucou');

// meilleure solution plus clean:

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function writer(word) {
  for (let char of word) {
    console.log(char);
    await delay(1000);
  }
  console.log("c'est terminé");
}