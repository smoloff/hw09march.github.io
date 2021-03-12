class Product {
    constructor(el){
        return el;
    }
}

class Shop {
    constructor(shopName) {
        this.productList = Array();
        this.shopName = shopName;
    }

    addNewProduct(product) {               // product=Product class object
        this.productList.push(product);
    }
}

let karavan = new Shop("Karavan");
let productArray = [
    {
        name: "apple",
        price: 18,
        amount: 10,
    },
    {
        name: "horse",
        price: 10000,
        amount: 1,
    },
    {
        name: "unicorn",
        price: 10000,
        amount: 1,
    },
];

productArray.forEach(element => karavan.addNewProduct(new Product(element)))
console.log(karavan.productList[0]);


