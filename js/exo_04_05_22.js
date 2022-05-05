// var Michel;
// Michel = 10;
// console.log(Michel);
// document.write(Michel);
// alert("bonjour," + " vous êtes ici");
// window.prompt(
//   "quel est le bilan de cette année",
//   "quelle est la couleur des moutons"
// );
// prompt("bonjour tout le monde");

// var prenom = prompt("entrer une valeur");
// var nb2 = 3;
// if (prenom == "michel") {
//   document.write(prenom);
// } else {
//   document.write("cette valeur n'est pas mon prenom");
// }

// var unChiffre = prompt("Entrez un chiffre");
// var result = unChiffre % 5;
// if (result == 0) {
// } else {
// }

// Number(prompt("Entrez nb1 :"));

// var nombre = prompt("Entrez votre nombre: ");
// var nombreFloat = parseFloat(nombre);
// var result = nombreFloat % 13;
// if (result == 0) {
//   document.write(nombre + "est multiple de 13");
// } else {
//   document.write(
//     nombre +
//       " n'est pas un résultat de 13 et le résultat du modulo est :" +
//       result
//   );
//
var saisie = prompt("Entrez votre saisie:");

var result = parseFloat(saisie);
if (Number.isNaN(result)) {
  document.write(saisie + " est une chaine de caractère composée de chiffres");
} else {
  var finalResalt = result % 7;
  if (finalResalt == 0) {
    document.write(saisie + " n'est pas un multiple de 7");
  } else {
    document.write(
      saisie +
        " n'est pas un multiple de 7 et le résultat du modulo est : " +
        finalResalt
    );
  }
}
