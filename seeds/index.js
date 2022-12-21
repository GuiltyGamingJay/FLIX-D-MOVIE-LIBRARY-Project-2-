// const { Product, Users, Cart, category } = require('../models');
const { Users } = require('../models');
// const productData = require('./product-seeds');
// const categoryData = require('./category-seed');
const userData = require('./userseed');
// const cartData = require('./cartdata');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE WORKING -----\n');
  
  // await category.bulkCreate(categoryData);
  // await Product.bulkCreate(productData);
  await Users.bulkCreate(userData, {
  individualHooks: true
  });
  // await Cart.bulkCreate(cartData);


  process.exit(0);
};

seedAll();