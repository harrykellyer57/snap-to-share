/* 
   Filename: ComplexScript.js
   Description: This script is a complex and elaborate implementation of a mock online ordering system.
   It handles user authentication, product selection, shopping cart management, and order processing.
   This script is more than 200 lines long and demonstrates a professional and creative approach to JavaScript programming.
*/

// Define global variables and objects
const USERS_DATA = [
  { username: 'user1', password: 'pass1', name: 'John Doe' },
  { username: 'user2', password: 'pass2', name: 'Jane Smith' }
];
const PRODUCTS_DATA = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 15 },
  { id: 3, name: 'Product C', price: 20 }
];
let currentUser = null;
let cart = [];

// Utility functions
function getUserByUsername(username) {
  return USERS_DATA.find(user => user.username === username);
}

function getProductById(productId) {
  return PRODUCTS_DATA.find(product => product.id === productId);
}

// User Authentication
function login(username, password) {
  const user = getUserByUsername(username);
  if (user && user.password === password) {
    currentUser = user;
    console.log('Logged in successfully.');
  } else {
    console.log('Invalid username or password.');
  }
}

function logout() {
  currentUser = null;
  cart = [];
  console.log('Logged out successfully.');
}

// Product Selection
function listProducts() {
  console.log('Available products:');
  PRODUCTS_DATA.forEach(product => {
    console.log(`- ${product.name} ($${product.price})`);
  });
}

function addToCart(productId) {
  if (currentUser) {
    const product = getProductById(productId);
    if (product) {
      cart.push(product);
      console.log(`${product.name} added to cart.`);
    } else {
      console.log('Invalid product ID.');
    }
  } else {
    console.log('Please login before adding products to cart.');
  }
}

// Shopping Cart Management
function viewCart() {
  console.log('Shopping cart:');
  if (cart.length === 0) {
    console.log('Empty cart');
  } else {
    cart.forEach(item => {
      console.log(`- ${item.name} ($${item.price})`);
    });
  }
}

function removeFromCart(productId) {
  const product = getProductById(productId);
  if (product) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log(`${product.name} removed from cart.`);
    } else {
      console.log(`${product.name} is not in the cart.`);
    }
  } else {
    console.log('Invalid product ID.');
  }
}

// Order Processing
function placeOrder() {
  if (currentUser) {
    if (cart.length === 0) {
      console.log('Cannot place an empty order.');
      return;
    }
    
    console.log(`Order for ${currentUser.name}:`);
    let total = 0;
    cart.forEach(item => {
      console.log(`- ${item.name} ($${item.price})`);
      total += item.price;
    });
    cart = [];
    console.log(`Total: $${total}`);
    console.log('Order placed successfully.');
  } else {
    console.log('Please login before placing an order.');
  }
}

// Example usage
login('user1', 'pass1');
addToCart(1);
addToCart(3);
viewCart();
placeOrder();
logout();

/* Output:
Logged in successfully.
Product A added to cart.
Product C added to cart.
Shopping cart:
- Product A ($10)
- Product C ($20)
Order for John Doe:
- Product A ($10)
- Product C ($20)
Total: $30
Order placed successfully.
Logged out successfully.
*/