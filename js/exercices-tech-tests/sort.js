// Énoncé :
// Tu dois trier un tableau d’objets par âge croissant.
// Si deux âges sont identiques, on trie par nom alphabétique.

const people = [
  { name: 'Zoe', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

// ma solution en 7min et 6 itérations:

function sortPeople(peoples) {
    return peoples.sort((a, b) => {
        const ageDiff = a.age - b.age;
        if (ageDiff != 0) return ageDiff;

        else {
            const nameDiff = a.name.localeCompare(b.name); // Utilisation de localeCompare pour comparer les strings
            return nameDiff;
        }
    })
}

sortPeople(people);
/* → [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Zoe', age: 30 }
] */
console.log(sortPeople(people));
