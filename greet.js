function createGreeter(greeting) {
  return function greet(name) {
    return `${greeting}, ${name}!`;
  };
}

const greet = createGreeter("Hello");

console.log(greet("World"));