"use strict";
// class init
class ArrayTest {
    constructor(arr) {
        this.arr = arr;
    }
    getProductsNames() {
        this.arr.map((arr) => {
            console.log(arr.name);
        });
    }
    getNamesPrice() {
        this.arr.map((arr) => {
            console.log(`${arr.name} costs ${arr.price}`);
        });
    }
    getProductsInStock() {
        const value = this.arr.filter((item) => item.inStock === true);
        console.log(value);
    }
    getProductsUnavailable() {
        const value = this.arr.filter((item) => item.inStock != true);
        console.log(value);
    }
}
const arrBox = [
    {
        id: 1,
        name: 'ariel',
        desc: 'detergent',
        price: 4,
        inStock: true,
    },
    {
        id: 5,
        name: 'peanut burger',
        desc: 'food',
        price: 90,
        inStock: false,
    },
    {
        id: 10,
        name: 'Zee',
        desc: 'soap',
        price: 500,
        inStock: false,
    },
    {
        id: 35,
        name: 'Quaker oats',
        desc: 'cereals',
        price: 50,
        inStock: true,
    },
    {
        id: 16,
        name: 'corn-flakes',
        desc: 'food',
        price: 40,
        inStock: false,
    },
    {
        id: 5,
        name: 'earphones',
        desc: 'phone accessory',
        price: 70,
        inStock: false,
    },
    {
        id: 19,
        name: 'Lois Vuitton',
        desc: 'clothing',
        price: 200,
        inStock: true,
    },
    {
        id: 13,
        name: 'nose mask',
        desc: 'face protection',
        price: 900,
        inStock: true,
    },
    {
        id: 39,
        name: 'checkers',
        desc: 'food',
        price: 208,
        inStock: false,
    },
    {
        id: 100,
        name: 'webcam',
        desc: 'computer camera',
        price: 288,
        inStock: false,
    },
];
// Array length is 10
const arrBag = new ArrayTest(arrBox);
arrBag.getProductsNames();
arrBag.getNamesPrice();
arrBag.getProductsInStock();
arrBag.getProductsUnavailable();
//# sourceMappingURL=app.js.map