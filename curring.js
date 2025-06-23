// Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking one argument at a time.
function greet(name) {
  return function (message) {
    console.log(`Hello, ${name}! ${message}`);
  };
}

greet("Shohan")("Good morning!");

const greet2 = (name) => (message) => `Hello, ${name}! ${message}`;

console.log(greet2("Shohan")("Good morning"));
