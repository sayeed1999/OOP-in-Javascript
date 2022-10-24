console.log('welcome to the world of non-OOP!')

const products = ['pen', 'pencil', 'khata', 'eraser', 'chal', 'dal', 'lau', 'poton', 'etc'];
const customers = ['sifat', 'hamim', 'sayem', 'rifat', 'tamzid', 'nayeem', 'naimur', 'shihab', 'etc!'];

const getAllProducts = () => products.slice();
const getProductByName = (name) => products.find(x => x === name);
const addProduct = (name) => products.unshift(name);
const deleteProduct = (name) => products.filter(x => x !== name);

const getAllCustomers = () => customers.slice();
const getCustomerByName = (name) => customers.find(x => x === name);
const addCustomer = (name) => customers.unshift(name);
const deleteCustomer = (name) => customers.filter(x => x !== name);



console.log( getAllProducts() );
console.log( getProductByName('lau') );
console.log( getProductByName('begun') );
console.log( addProduct('morich') );
console.log( deleteProduct('pen') );

console.log( getAllCustomers() );
console.log( getCustomerByName('sifat') );
console.log( addCustomer('sayeed') );
console.log( deleteCustomer('sifat') );