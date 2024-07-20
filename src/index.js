import createItem from './service/item.js';
import * as cartService from './service/cart.js';

const  cart = [];
const myWhishList = [];

console.log("Welcome to the tour shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 7);
const item2 = await createItem("spider man t-shirt", 39.99, 1);
const item3 = await createItem("SSD 1tb", 152.00 , 1);

await cartService.addItem(cart, item1);
await cartService.addItem(myWhishList, item2);
await cartService.addItem(myWhishList, item3);

await cartService.displaycart(cart)

// await cartService.deleteItem(myWhishList, item3.name)

console.log("Shopee cart TOTAL IS:");
await cartService.calculaleTotal(cart);
await cartService.calculaleTotal(myWhishList);