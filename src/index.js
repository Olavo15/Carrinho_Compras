import createItem from './service/item.js';

const  cart = [];

console.log("Welcome to the tour shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("spider man t-shirt", 15.99, 2);

console.log(item2.subtotal());