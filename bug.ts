function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This will throw an error because the function expects a string and receives an array of strings