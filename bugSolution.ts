function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This works now
console.log(greeter("Jane User")); //This also works