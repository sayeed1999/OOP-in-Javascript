console.log('welcome to the world of inheritance - 2nd principle of Oops!');

// lets code now..

class Base
{
  // properties
  id;
  createdAt; // when is the entity created on database
  createdBy; // the userId of the user who did the entry to the database
  updatedAt; // when is the entity last updated on database
  updatedBy; // the userId of the user who did the update on the entry in the database
  deletedAt; // when is the entity last updated on database
}

// hard delete - permanently deleted!
// soft delete - not permanently deleted!

class Product extends Base
{
  name;
  manufacturedBy;
  manufacturedDate;
  category;
  price; // 5tk  -> 6tk
}

class Customer extends Base
{
  name;
  address;
  phone;
  isVerifiedCustomer;
} 