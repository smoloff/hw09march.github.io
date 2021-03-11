class Product {
    constructor(productName, price, quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
}

class Shop {
    constructor(shopName) {
        this.productList = [];
        this.shopName = shopName; 
        // console.log(this.productList);
    }

    addNewProduct(product) {
        this.productList.push(product);
    }
}

let shop = new Shop ("first");

let productArray = ["apple", "horse", "unicorn"]
productArray.forEach( element => {
    shop.addNewProduct(element);
   
})

console.log(shop);