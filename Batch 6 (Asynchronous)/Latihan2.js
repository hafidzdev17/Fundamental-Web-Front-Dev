// Callback function

const getCoffee = (ambilkan) => {
    let coffee = null;
    console.log("sedang membuat coffe,silahkan tunggu!");
    setTimeout(() => {
        coffee = "Kopi Selesai!";
        ambilkan(coffee);
    }, 3000)
}

getCoffee(coffee => {
    console.log(coffee);

});

// Callback Hell
function makeACake (...rawIngredients) {
    gatheringIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}