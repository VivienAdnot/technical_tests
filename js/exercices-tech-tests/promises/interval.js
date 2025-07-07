// Écris une fonction countdown(n) qui affiche chaque seconde un nombre
// en décrémentant de n jusqu’à 0
// puis affiche "BOOM!"
// et arrête le timer.

// ma solution en 5min:

function countdown(n) {
  let intervalId;

  function maybeStop() {
    if (n < 0) {
      clearInterval(intervalId);
      console.log('BOOM!');
    }
  }

  intervalId = setInterval(() => {
    console.log(n);
    n--;
    maybeStop();
  }, 1000);
}

// countdown(5);

// variante plus clean

function countdown2(n) {
  const intervalId = setInterval(() => {
    console.log(n);
    if (n === 0) {
      clearInterval(intervalId);
      console.log('BOOM!');
    }
    n--;
  }, 1000);
}

countdown2(5);