// Spreading operator dituliskan dengan three consecutive dots (....). Sesuai namanya “Spread”, fitur baru ES6 ini digunakan untuk membentangkan nilai array atau lebih tepatnya iterable object menjadi beberapa elements. 

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(...favorites);

/* Math.max() -> Mencari nilai terbesar */
const numbers = [12, 32, 90, 12, 32];
 
// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])
 
console.log(Math.max(...numbers));

// Menggabungkan dua buah array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
 
const allFavorites = [...favorites, ...others]
 
console.log(allFavorites);