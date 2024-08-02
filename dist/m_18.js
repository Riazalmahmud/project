"use strict";
{
    //
    class User {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getUserName() {
            console.log(`your name is ${this.name} email ${this.age}`);
        }
    }
    const user = new User("Riaz", 25, "dhaka bangladesh");
    user.getUserName();
    class ProductClass {
        constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
        getProductInfo() {
            console.log(`product id is ${this.id} product name is ${this.name} product age is ${this.age}`);
        }
    }
    function GenerateProductFunction(name, age, address) {
        return new ProductClass(name, age, address);
    }
    const product = GenerateProductFunction("Riaz", 15, "riaz041@gmail.com");
    product.getProductInfo();
    class Car {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
        getCarInfo() {
            console.log(`Car id is ${this.id} car name is ${this.name} car price is ${this.price}`);
        }
    }
    class Bike {
        constructor(name, brand) {
            this.name = name;
            this.brand = brand;
        }
        getBikeInfo() {
            console.log(`Bike name is ${this.name} bike brand is ${this.brand}`);
        }
    }
    function generatedFunction(type, ...args) {
        if (type === "car") {
            return new Car(args[0], args[1], args[2]);
        }
        else {
            return new Bike(args[0], args[1]);
        }
    }
    const newCar = new Car("Car", "Toyota", 2000);
    console.log(newCar.getCarInfo());
    const newBike = new Bike("Bike", "Yamaha");
    console.log(newBike.getBikeInfo());
    //
}
