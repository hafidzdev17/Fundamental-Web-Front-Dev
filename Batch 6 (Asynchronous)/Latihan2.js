// Callback function

const getCoffee = (ambilkan) => {
    let coffee = null;
    console.log("sedang membuat coffe,silahkan tunggu!");
    setTimeout(() => {
        coffee = "Kopi Selesai!";
        ambilkan(coffee);
    },3000)
}

getCoffee(coffee => {
    console.log(coffee);
    
});

// Callback Hell