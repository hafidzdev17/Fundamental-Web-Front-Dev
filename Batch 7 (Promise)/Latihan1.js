//?? Situs MDN mengatakan Promise merupakan sebuah objek yang digunakan untuk membuat sebuah perhitungan (kode) ditangguhkan dan berjalan secara asynchronous. 

const executeFunc = (resolve, reject) => {
    const isCoffeMaker = false;

    if (isCoffeMaker) {
        resolve("kopi berhasil dibuat");
    } else {
        reject("pelayan nya ingkar janji")
    }
}

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);

}

const handlerRejected = rejectionReason => {
    console.log(rejectionReason)
}

const makeCoffe = new Promise(executeFunc);
makeCoffe
    .then(handlerSuccess)
    .catch(handlerRejected);
