function buatKopi (panas) {
   var kopi;
   if (panas) {
      kopi = "Buatkan Kopi Panas"
   } else {
      kopi = "Buatkan Kopi Dingin"
   }

   return kopi;

}

console.log(buatKopi(true));

// Hoisting before declarate variable

function getFood () {
   food = "Chocolate";
   console.log(food);
   var food;
}

getFood();
