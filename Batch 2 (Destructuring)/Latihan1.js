// Destucturing Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName: namaDepan, lastName: namaAkhir, age: umur} = profile;
 
console.log(namaDepan, namaAkhir, umur);

// Destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [firstFood, secondFood, thirdFood, fourthFood,herFood = "Salad"] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log(herFood);


// Destructuring Assignment
let a = 1;
let b= 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);