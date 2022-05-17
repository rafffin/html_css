//SOLUTION BOUCLE INFINIE D' APRES L'ENNONCE ENTREZ LA BOITE
// DE  DIALOGUE, ANALYSEZ LES VALEURS DANS LA SAISIE

// alert("test");
var disMoi = prompt("Allez!! On joue à ni oui ni non");
// var i = 1;
disMoi = "oui";
while (disMoi !== "oui" && disMoi !== "non") {
  disMoi = prompt("Allez!! On joue à ni oui ni non?");
  document.write(
    '"' + disMoi + "\" n'est pas une réponse, veux-tu jouer oui ou non? <br>"
  );
}

//     i++;
// }
// i--;//parce qu'il y a une incrémentation en trop
// document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");
