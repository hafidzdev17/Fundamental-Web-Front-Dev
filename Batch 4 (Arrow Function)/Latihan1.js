// Arrow function satu parameter
const nama = ['hafid','deddy','dian','windy']
        .map(name => name.toUpperCase());

        console.log(...nama);

// Arrow function Dua Parameter
const ucapkanSalam = (nama,salam) => {
    console.log(`${nama}`,`${salam}`);
}

ucapkanSalam('hafid','assalamualaikum')

// Tidak Membutuhkan parameter
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello()

// default parameter
const halo = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);
 
 
halo("Dimas", "Hai");
halo()
