// Rest Parameter
// Rest parameter dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah variadic function.

function sum (...numbers) {
    var result = 0;
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5));

// Rest Parameter Destructuring
const buah = ['apel', 'jeruk', 'mangga', 'nanas', 'pepaya', 'anggur'];
const [buah1, buah2, buah3, ...semua] = buah;
console.log(buah1);
console.log(buah2);
console.log(buah3);
console.log(semua);