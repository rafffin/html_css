// 6*1=;
// 6*2=;
// 6*3=;
// 6*4=;
// 6*5=;
// 6*6=;
// 6*7=;
// 6*8=;

var saisie = 6;
for (var i = 1; i <= 10; i++) {
  document.write(saisie + " x " + i + " = " + saisie * i + "<br>");
}
var saisie = Number(prompt("veuillez saisir votre chiffre enttre 2 et 9"));
if (saisie < 2 && saisie > 9) {
  var saisie = Number(prompt("veuillez saisir votre chiffre enttre 2 et 9"));
} else {
  var saisie = Number(prompt("veuillez saisir votre chiffre enttre 2 et 9"));
  while (saisie < 2 || saisie > 9) {
    alert("Insérez un chiffre entre 2 et 9");
    var saisie = Number(prompt("veuillez saisir votre chiffre enttre 2 et 9"));
  }
}
// reponse formateur

// var choix = prompt("Choisis un nombre enbtre 2 et 9:");
// while (choix > 1 || choix < 10) {
//   if (choix >= 2 && choix <= 9) {
//     for (var i = 1; i <= 10; i++) {
//       var res = choix * i;
//       document.write(choix + "x" + i + "=" + res + "<br />");
//     }
//     break;
//   } else {
//     choix = Number(prompt("Entrez un nombre entre 2 et 9 :"));
//   }
// }
