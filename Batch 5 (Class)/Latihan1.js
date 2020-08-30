class Kucing {
    constructor(jenis, warna, makanan) {
        this.jenis = jenis,
            this.warna = warna,
            this.makanan = makanan
    }
}

// instansiasi
const type1 = new Kucing("anggora", "kuning", "popan");
const type2 = new Kucing("garfield", "coklat", "popan");

console.log(type1.jenis);
console.log(type2.warna);

class Car {

    // Sama seperti function constructor
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    // Sama seperti Car.prototype.startEngine
    startEngines () {
        console.log('Mobil dinyalakan...');
        this.enginesActive = true;
    }

    // Sama seperti car.prototype.info
    info () {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }

}

const johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();