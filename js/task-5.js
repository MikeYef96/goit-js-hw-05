"use strict";

class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this.speed = speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn = false;
    this.distance = distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (value < this.maxSpeed) return (this.speed = value);
  }

  decelerate(value) {
    if (this.speed > 0) return (this.speed -= value);
  }

  drive(hours) {
    if (this.isOn) return (this.distance += hours * this.speed);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 40000;
console.log(mustang.price); // 4000
Car.getSpecs(mustang); // Test for adding price
