
// catatan : 
// Gunakan let ketika variabel yang kita buat akan diinisialisasikan kembali nilainya. 
// Gunakan const ketika variabel yang kita buat tidak ingin diinisialisasikan kembali nilainya.

// const menggunakan array dan object

const nama = ['hafid', 'deddy', 'hasyim', 'doni'];
nama.push('nauval');
console.log(nama);

const ngoding = {
    backend: {
        php: ['Laravel, CodeIgniter, Symfony'],
        js: [' Express, Adonis, Hapijs']
    },
    frontend: 'vuejs, reactjs, svelte, angular'
}
ngoding.fullstack = "MERN ,MEAN, MEVN, PERN";
console.table(ngoding.backend);