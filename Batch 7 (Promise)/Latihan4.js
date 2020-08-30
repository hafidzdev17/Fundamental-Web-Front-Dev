// async await promise

const ambilKopi = () => {
    return new Promise((resolve, reject) => {
        const biji = 100;
        setTimeout(() => {
            if (biji >= 90) {
                resolve("Kopi didapatkan")
            } else {
                reject("Biji kopi habis")
            }
        }, 1000)
    })
}

// cara biasa
// function buatKopi () {
//     ambilKopi()
//         .then(kopi => {
//             console.log(kopi);
//         })
// }

// buatKopi();

// async await
async function damelKopi () {
    try {
        const kopi = await ambilKopi();
        console.log(kopi);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

damelKopi();