
function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

Car.prototype.getDetails = function() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
}

const toyota = new Car('Toyota', 'Corolla', 2020);

toyota.getDetails();

// Class 

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} I'm ${this.age} years old.`);
        
    }
}

const person = new Person('Shohan', 28)
person.introduce();
