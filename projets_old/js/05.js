var nb1 = 10;
var nb2 = 3;
if (nb1 > 50) {
  nb1++;
  nb1 = nb1 * nb2;
  document.write(
    "nb1 et nb2 sont bien égale à :" + nb1 + "<br>" + nb2 + "<br>"
  );
}

document.write(nb1 + "<br>" + nb2);
