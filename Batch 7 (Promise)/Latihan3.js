// Promise All

const pesanArabika = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi Arabika selesai");
        },4000)
    });
}

const pesanRobusta = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi Robusta selesai");
        },3000)
    });
}

const pesanLiberica = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi Liberica selesai");
        },2000)
    });
}

const promises = [pesanArabika(),pesanRobusta(),pesanLiberica()];

Promise.all(promises)
.then(resolvedValue => {
    console.log(resolvedValue);
    
});
