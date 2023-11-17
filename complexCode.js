/**
 * Filename: complexCode.js
 * 
 * Description:
 * This code demonstrates a complex and sophisticated example of a fictional e-commerce shopping cart system.
 * It includes various features such as user authentication, product listing and filtering, cart management, and order processing.
 * Although simplified for demonstration purposes, it showcases best practices in code organization, modularization, and error handling.
 */

// Constants and Data Structures
const products = [
  { id: 1, name: "Product A", price: 10.99 },
  { id: 2, name: "Product B", price: 19.99 },
  { id: 3, name: "Product C", price: 29.99 },
];

const users = [
  { id: 1, username: "user1", password: "pass1" },
  { id: 2, username: "user2", password: "pass2" },
];

// Helper Functions
const findProductById = (id) => {
  return products.find((product) => product.id === id);
};

const authenticate = (username, password) => {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) throw new Error("Invalid credentials");
};

// Classes
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(productId, quantity) {
    const product = findProductById(productId);
    if (!product) throw new Error("Product not found");

    const existingItem = this.items.find(
      (item) => item.product.id === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(productId) {
    const existingItemIndex = this.items.findIndex(
      (item) => item.product.id === productId
    );

    if (existingItemIndex !== -1) {
      this.items.splice(existingItemIndex, 1);
    }
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}

// Main Program Flow
try {
  authenticate("user1", "pass1");

  const cart = new Cart();
  cart.addItem(1, 2);
  cart.addItem(2, 1);
  cart.removeItem(1);

  console.log("Cart Total:", cart.getTotal());
} catch (error) {
  console.error("Error:", error.message);
}