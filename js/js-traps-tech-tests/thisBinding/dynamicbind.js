// ================================================================================================
// binding dynamique de this en JavaScript
// ================================================================================================
console.log('this dynamic binding in JavaScript');

function showThis() {
  console.log(this);
}

const obj1 = {
  show: showThis
};
obj1.show(); // Output: { show: [Function: showThis] } donc this est l'objet obj1
showThis(); // Output: global object donc this est l'objet global (window en browser, global en Node.js)
// donc le this est dynamique, il dépend de qui appelle la fonction