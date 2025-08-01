// Polymorphism means “many forms.”
// In OOP, it refers to the ability of different classes to define methods with the same name but different behavior.

// 🧠 Why Use It?
// Allows shared interfaces with custom behavior

// Encourages extensibility and code reuse
class Shape {
  getArea() {
    console.log("Shape area");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(`This rectangle area is ${this.width * this.height}`);
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    console.log(`This Circle area is ${3.1416 * (this.r * this.r)}`);
  }
}

const rect = new Rectangle(12, 27);
rect.getArea();
const circle = new Circle(34);
circle.getArea();
