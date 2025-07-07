// attendre 1 seconde, écris 1
// puis attendre 2 secondes écrire 2
// puis attendre secondes écrire 3
// puis écrire c'est fini


// ma solution avec boucle, async/await, Promise et setTimeout:

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(time);
      resolve();
    }, time * 1000);
  });
};

const main = async () => {
  for (let index = 1; index < 4; index++) {
    await sleep(index);
  }

  console.log("c'est fini");
}

//main();

// autre solution, callback hell:
setTimeout(() => {
  console.log(1);

  setTimeout(() => {
    console.log(2);

    setTimeout(() => {
      console.log(3);
      console.log("c'est fini");

    }, 3000);

  }, 2000);

}, 1000);
