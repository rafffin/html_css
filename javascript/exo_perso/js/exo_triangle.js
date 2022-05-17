//  BOUCLE FOR INCREMENTATION  forme ++

// declare

var rang;

// initialise

var forme = "";

// pour.. on affect valeurs rang / si rang et inferieur et égal à 6 on incremente
// correction var diese=""; var rang;  on affecte notre var for( var rang = 0; rang< 7; rang++)
// fonction boucle initialisation,condition,incrémentation ;  saut à la ligne <br>  {   code à exécuter}
for (rang = 0; rang <= 6; rang++) {
  forme += "☠";

  document.write(forme + "<br>");
}

var ligne = "";

var i = 1;

// tant que i inferieur ou egale a 6

while (i <= 6) {
  ligne = ligne + "☠";

  console.log(ligne);

  i++;
}
