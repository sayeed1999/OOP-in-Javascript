console.log('Welcome to the world of Encapsulation - 1st principle of Oops!');

// CRUD operations

class Base
{
  items = [];

  constructor(items) {
    this.items = items;
  }

  // all the generic methods should live here that serves a common purpose
  getAll = () => this.items.slice();
  getByName = (name) => this.items.find(x => x === name);
  add = (name) => this.items.unshift(name);
  delete = (name) => this.items.filter(x => x !== name);  

}

// product uses sql database
class Product extends Base
{
  constructor() {
    let products = ['pen', 'pencil', 'khata', 'eraser', 'chal', 'dal', 'lau', 'poton', 'etc'];
    super(products);
  }

  // all the product specific methods live here
  getAllLatestProducts = () => {

  }

  getProductsByCategory = (category) => {

  }

  getAllExpensiveProducts = () => {

  }
}

// customer uses mongodb database
class Customer extends Base
{
  constructor() {
    let customers = ['sifat', 'hamim', 'sayem', 'rifat', 'tamzid', 'nayeem', 'naimur', 'shihab', 'etc!'];
    super(customers);
  }

  // all the customer specific methods live here
  getAllCustomersWhoBuyMoreProducts = () => {

  }

}

const p = new Product();
const c = new Customer();

// console.log( p.getAllCustomers() );
console.log( p.getAll() );
console.log( c.getAll() );
