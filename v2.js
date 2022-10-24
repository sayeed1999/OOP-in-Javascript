console.log('Welcome to the world of Encapsulation - 1st principle of Oops!');

// CRUD operations

class Product
{
  // properties
  products = ['pen', 'pencil', 'khata', 'eraser', 'chal', 'dal', 'lau', 'poton', 'etc'];

  // methods
  getAllProducts = () => this.products.slice();
  getProductByName = (name) => this.products.find(x => x === name);
  addProduct = (name) => this.products.unshift(name);
  deleteProduct = (name) => this.products.filter(x => x !== name);
}

class Customer
{
  // properties
  customers = ['sifat', 'hamim', 'sayem', 'rifat', 'tamzid', 'nayeem', 'naimur', 'shihab', 'etc!'];

  // methods
  getAllCustomers = () => this.customers.slice();
  getCustomerByName = (name) => this.customers.find(x => x === name);
  addCustomer = (name) => this.customers.unshift(name);
  deleteCustomer = (name) => this.customers.filter(x => x !== name);
}

const p = new Product();
const c = new Customer();

// console.log( p.getAllCustomers() );
console.log( p.getAllProducts() );