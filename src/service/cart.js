async function addItem(UserCart, item){
    UserCart.push(item);
}

async function deleteItem(UserCart, name){
    const index = UserCart.findIndex((item) => item.name === name);
    if(index !== -1){
        UserCart.splice(index,1);
    }
}

async function removeItem(UserCart, index){}

async function calculaleTotal(UserCart){
    const result = UserCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result.toFixed(2));
}

async function displaycart(UserCart){
    console.log("shopee cart list:")
    UserCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price}| 
                    ${item.quantity} |Subtotal = ${item.subtotal().toFixed(2)}`);
    })
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculaleTotal,
    displaycart,
}