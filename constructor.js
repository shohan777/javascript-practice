// A constructor function is a regular function used to create multiple object instances with the same structure.
// Think of it like a template for making objects.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getDetails = function () {
  console.log(`${this.brand} ${this.model} (${this.year})`);
};

const toyota = new Car("Toyota", "Corolla", 2020);

toyota.getDetails();

// Class

// The class syntax is a cleaner, more readable way to define constructor functions and prototypes.

// It does the same thing under the hood — just looks better and is easier to work with.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} I'm ${this.age} years old.`);
  }
}

const person = new Person("Shohan", 28);
person.introduce();
