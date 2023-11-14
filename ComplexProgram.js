/*
   Filename: ComplexProgram.js
   Description: This complex JavaScript program showcases advanced concepts and algorithms.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to generate random number within a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];

// Create an array of Person objects with random names and ages
const people = [];
for (let i = 0; i < 10; i++) {
  const name = names[getRandomNumber(0, names.length - 1)];
  const age = getRandomNumber(18, 60);
  const person = new Person(name, age);
  people.push(person);
}

// Sort people array by age in descending order
people.sort((a, b) => b.age - a.age);

// Calculate the average age of people
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;

// Find the oldest person
const oldestPerson = people[0];

// Print the results
console.log("List of people sorted by age:");
console.log(people);
console.log("Average age of people:", averageAge);
console.log("Oldest person:", oldestPerson);

// Recursive function to calculate factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Calculate factorial of a random number between 1 and 10
const randomNum = getRandomNumber(1, 10);
const factorialResult = factorial(randomNum);

console.log(`Factorial of ${randomNum} is ${factorialResult}.`);

// Other complex algorithms and functionality can be added below...

// ...

// ...

// ...

// End of code
