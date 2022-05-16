// Les tableaux en javascript

// var tableauFruits = ["Apple", "Banana", "Orange"];
// var tableauPays = ["France", "Canada", "Brésil"];
// var tableauChiffres = [12, 13, 14];

//  console.log(tableauFruits, tableauPays, tableauChiffres);
// / console.log(tableauFruits.lenght);
// console.log(tableauPays.lenght);
//  console.log(tableauChiffres.lenght);

//  console.log("tableauFruits : ", tableauFruits);

// var first = tableauChiffres[0];
// console.log("Contenu du premier élément du tableauFrits :", first);

// var second = tableauPays[0];
// var third = tableauFruits[0];

// console.log(first);

// console.log(tableauChiffres[1]);

// pour voir le dernier contenu du tableau
// var tableauChiffres = [];

// var last = tableauFruits[nombreItems - 1];
// console.log(tableauChiffres[n - 1]);

/*....*/

// Les tableaux en javascript

// var fruits = ['Apple', 'Banana'];

// console.log(fruits);
// console.log(fruits.length);

// ********** tableauFruits *********//

var tableauFruits = [];
console.log("tableauFruits : ", tableauFruits);

tableauFruits = ["Apple", "Banana", "Watermelon"];
console.log("Contenu tableauFruits : ", tableauFruits);
console.log("Nombres des items tableauFruits : ", tableauFruits.length);

var lastFruit = tableauFruits[tableauFruits.length - 1];
console.log("contenu du dernier élément du tableauFruits: ", lastFruit);

var first = tableauFruits[0];
console.log("Contenu du premier élément du tableauFruits : ", first);

//ajouter un ou plusieurs éléments à mon tableau :

tableauFruits.push("Abricot");
console.log(tableauFruits);

var resultatDeLaFonctionPop = tableauFruits.pop();
console.log(tableauFruits);
console.log(resultatDeLaFonctionPop);

var resultatDeLaFonctionShift = tableauFruits.shift();
console.log(tableauFruits);
console.log(resultatDeLaFonctionShift);

var resultatDeLaFonctionUnShift = tableauFruits.unshift("Strawberry", "Mango");
console.log(tableauFruits);
console.log(resultatDeLaFonctionUnShift);

var position = tableauFruits.indexOf("Mango");
console.log(position);

var resultatDeLaFonctionSplice = tableauFruits.splice(1, 2);
console.log("resultatDeLaFonctionSplice", resultatDeLaFonctionSplice);
console.log("tableauFruits", tableauFruits);

//Copier un tableau
var shallowCopy = tableauFruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits du tableau : tableauFruits

console.log("Le contenu de la variable shallowCopy : ", shallowCopy);
console.log("Le contenu du tableau tableauFruits : ", tableauFruits);

// ********** tableauPays *********//
var tableauPays = [];
console.log("tableauPays : ", tableauPays);
tableauPays = ["Pakisdtan", "Benin", "France"];

console.log("Contenu tableauPays : ", tableauPays);
console.log("Nombres des items tableauPays : ", tableauPays.length);

var lastPays = tableauPays[tableauPays.length - 1];
console.log("contenu du dernier élément du tableauPays : ", lastPays);

var retourDeLaFonctionPush = tableauPays.push("Maroc", "Inde");
console.log(tableauPays);
console.log(retourDeLaFonctionPush);

// ********** tableauChiffres *********//

var tableauChiffres = [];
console.log("tableauChiffres : ", tableauChiffres);
tableauChiffres = [5, 15, -256];

console.log("Contenu tableauChiffres : ", tableauChiffres);
console.log("Nombres des items tableauChiffres : ", tableauChiffres.length);

var lastChiffre = tableauChiffres[tableauChiffres.length - 1];
console.log("contenu du dernier élément du tableauChiffre : ", lastChiffre);

console.log(
  "Contenu du deuxième élément du tableauChiffres : ",
  tableauChiffres[1]
);
tableauChiffres.push(5.59, 127);
console.log(tableauChiffres);
