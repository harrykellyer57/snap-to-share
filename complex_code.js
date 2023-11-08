/*
 * Filename: complex_code.js
 * Description: This code demonstrates a complex implementation of a bookstore system.
 * It includes functionalities for adding and managing books, customers, and orders.
 */

// Book class
class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to calculate total value of books
  getTotalValue() {
    return this.price * this.quantity;
  }
}

// Customer class
class Customer {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
  }
  
  // Method to place an order
  placeOrder(books, quantities) {
    // Validate if books and quantities are valid
    if (books.length !== quantities.length) {
      console.error('Mismatched book and quantity arrays');
      return false;
    }
    
    // Check if all books are available in desired quantities
    for (let i = 0; i < books.length; i++) {
      if (books[i].quantity < quantities[i]) {
        console.error(`Insufficient quantity of "${books[i].title}"`);
        return false;
      }
    }
    
    // Process the order
    const orderTotal = books.reduce((total, book, index) => {
      book.quantity -= quantities[index];
      return total + (book.price * quantities[index]);
    }, 0);
    
    console.log(`Order placed successfully. Total: $${orderTotal}`);
    return true;
  }
}

// Create some books
const books = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99, 10),
  new Book("To Kill a Mockingbird", "Harper Lee", 12.99, 5),
  new Book("Pride and Prejudice", "Jane Austen", 10.99, 7)
];

// Create some customers
const customers = [
  new Customer("John Doe", "john@example.com", "123 Main St"),
  new Customer("Jane Smith", "jane@example.com", "456 Elm St")
];

// Place an order
customers[0].placeOrder([books[0], books[1]], [2, 3]);

// Output book inventory
console.log("Book Inventory:");
books.forEach(book => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Quantity: ${book.quantity}`);
});

// Output customer information
console.log("\nCustomer Information:");
customers.forEach(customer => {
  console.log(`Name: ${customer.name}, Email: ${customer.email}, Address: ${customer.address}`);
});

// More code here...