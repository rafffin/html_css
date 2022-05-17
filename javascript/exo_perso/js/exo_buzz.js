//  BOUCLE FOR DIVISION  SOLUTION UTILISANT UNE SERIE  DE IF/ELSE

//  on initialise nb / si nb inferieur ou egale a 100 on incremente

for (var nb = 1; nb <= 100; nb++) {
  // si nb % 3 et nb % 5 sont strictement egale a 0 on affiche Fizzbuzz + saut a la ligne
  if (nb % 3 === 0 && nb % 5 === 0) document.write("FizzBuzz" + "<br>");
  // si nb % 3 est strictement egale a 0 on affiche fizz + saut a la ligne
  else if (nb % 3 === 0) document.write("Fizz" + "<br>");
  // si nb % 5 est strictement egale a 0 on affiche buzz + saut a la ligne
  else if (nb % 5 === 0) document.write("Buzz" + "<br>");
  // sinon on affiche nb + saut a la ligne
  else document.write(nb + "<br>");
}
// for (var nb = 1; nb <= 100; nb++) {
//     // si nb % 3 et nb % 5 sont strictement egale a 0 on affiche Fizzbuzz + saut a la ligne
//     if (nb % 3 === 0 && nb % 5 === 0) document.write("FizzBuzz" + "<br>");
//     // si nb % 3 est strictement egale a 0 on affiche fizz + saut a la ligne
//     else if (nb % 3 === 0) document.write("Fizz" + "<br>");
//     // si nb % 5 est strictement egale a 0 on affiche buzz + saut a la ligne
//     else if (nb % 5 === 0) document.write("Buzz" + "<br>");
//     // sinon on affiche nb + saut a la ligne
//     else document.write(nb + "<br>");
//   }
