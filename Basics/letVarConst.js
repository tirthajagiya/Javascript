// let, var and const is a keyword for define variable
// 4 way to define variable

const productId = 123;
let productName = "Tshirt";
var productPrice = 1299;
productCode = "8DAW72F";
let productSell;

// productId = 456; // const value never change
// console.log(productId);

productName = "Pant";
productPrice = 1499;
productCode = "AAABBC";

console.table([productName, productPrice, productCode]);

// you can change value of let and var.

// main diffrence between let and var is face issue in block scoping and functional scoping