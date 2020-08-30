class Car {
    constructor (manufacture,color) {
        this.manufacture = manufacture;
        this.color = color;
        this.engineActive = false;
    }
}

const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");
 
adamCar.color = 'White'

console.log(johnCar.manufacture);
console.log(adamCar.color);
