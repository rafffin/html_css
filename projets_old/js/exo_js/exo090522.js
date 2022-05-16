var nb1 = Number(prompt("entrez nb1:"));
var nb2 = Number(prompt("entrez nb2:"));
var nb3 = Number(prompt("entrez nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else if (nb3 < nb2) {
  nb1++;
  if (nb1 == nb3) {
    nb1 = nb3 * 3 + nb1;
  }
} else {
  prompt(" je suis perdu ");
  document.write("Felicitation, tu as compris js");
}
document.write(
  "nb1 :" + nb1 + "<br>" + "nb2 :" + nb2 + "< br >" + "nb3 :" + nb3
);
