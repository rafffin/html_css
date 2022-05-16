var a = 2;
console.log("valeur initiale de a : " + a);
a = a - 1;
console.log("valeur finale de la soustraction de a : " + a);
a++;
console.log("résultat d'incrementé de la variable a " + a);

var b = 8;
console.log("valeur initiale de b : " + b);
b += 2;
console.log("nouvelle valeur b : " + b);

var c = a + b * b;
console.log("determination de valeur c : " + c);

var d = a * b + b;
console.log("determination de valeur d : " + d);

var e = a * (b + b);
console.log("determination de valeur e : " + e);

var f = a * (b / a);
console.log("division de valeur f : " + f);

var g = b / (a * a);
console.log("multiplication de valeur g : " + g);
