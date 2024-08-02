{
  //
  class User {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getUserName() {
      console.log(`your name is ${this.name} email ${this.age}`);
    }
  }

  type GenerateUser = InstanceType<typeof User>;
  const user: GenerateUser = new User("Riaz", 25, "dhaka bangladesh");
  user.getUserName();

  class ProductClass {
    constructor(public id: string, public name: string, public age: number) {}
    getProductInfo() {
      console.log(
        `product id is ${this.id} product name is ${this.name} product age is ${this.age}`
      );
    }
  }

  type GenerateProduct = InstanceType<typeof ProductClass>;
  function GenerateProductFunction(
    name: string,
    age: number,
    address: string
  ): GenerateProduct {
    return new ProductClass(name, age, address);
  }
  const product = GenerateProductFunction("Riaz", 15, "riaz041@gmail.com");
  product.getProductInfo();

  class Car {
    constructor(public id: string, public name: string, public price: number) {}

    getCarInfo() {
      console.log(
        `Car id is ${this.id} car name is ${this.name} car price is ${this.price}`
      );
    }
  }
  class Bike {
    constructor(public name: string, public brand: string) {}
    getBikeInfo() {
      console.log(`Bike name is ${this.name} bike brand is ${this.brand}`);
    }
  }
  type GenerateCarBike = InstanceType<typeof Car | typeof Bike>;

  function generatedFunction(
    type: "car" | "bike",
    ...args: any[]
  ): GenerateCarBike {
    if (type === "car") {
      return new Car(args[0], args[1], args[2]);
    } else {
      return new Bike(args[0], args[1]);
    }
  }
  const newCar = generatedFunction("car", "Toyota", 'Corolla', 2000) as Car;
  console.log(newCar.getCarInfo());
  const newBike = generatedFunction ("bike", "Yamaha") as Bike;
    console.log(newBike.getBikeInfo());

    
  //
}
