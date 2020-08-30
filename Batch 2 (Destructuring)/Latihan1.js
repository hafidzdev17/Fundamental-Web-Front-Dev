// Destructuring pada JavaScript merupakan sintaks yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

// Destucturing Object
const biodata = {
    namaDepan: "Hafid",
    namaBelakang: "Masruri",
    umur: 21
}

const pecahkan = { satu: namaDepan, dua: namaBelakang, tiga: umur } = biodata;

console.log(pecahkan);

// Destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood, herFood = "Salad"] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log(herFood);


// Destructuring Assignment
let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);