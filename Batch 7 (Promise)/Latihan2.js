// Chaining Promise

const state = {
    pesanKopi: true,
    bijiStok:{
        arabika: 250,
        robusta: 100,
        liberica: 70
    }
}


const ambilBiji = (tipe, mili) => {
    return new Promise((resolve,reject)=> {
        if (state.bijiStok[tipe] >= mili) {
            state.bijiStok[tipe] -= mili;
            resolve("Biji kopi didapatkan!");
        } else {
            reject("Maaf stok kopi habis!")
        }
    }); 
}

const buatKopi = biji => {
    return new Promise((resolve,reject) => {
        if (state.pesanKopi) {
            resolve("Kopi berhasil dibuat!");
        } else {
            reject("Maaf mesin tidak dapat digunakan")
        }
    });
}

const hidangkan = kopi => {
    return new Promise(resolve => {
        resolve("Pesanan kopi sudah selesai")
    })
}

function pesanKopi(tipe,mili) {
    ambilBiji(tipe,mili)
    .then(buatKopi)
    .then(hidangkan)
    .then(kopiSukses => {
        console.log(kopiSukses);
        
    })
    .catch(kopiGagal => {
        console.log(kopiGagal);
    })
}

pesanKopi("arabika",90);
