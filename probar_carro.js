const Carro = require('./Carro.js');

//En otro script PUNTO 2
let a = new Carro({});
const b = {patata:1,cebolla:2,agua:4};
const c = {patata:0,cebolla:2,agua:3};
const d = {patata:1,boniato:2,leche:4};
const e = {manzana:1,pera:2,aguacate:4};

console.log("insertamos en carro patata:1,cebolla:2,agua:4");
a.importObject(b);
console.log(a.toString());
console.log("\n");

console.log("eliminamos de carro patata:0,cebolla:2,agua:3");
a.deleteObject(c);
console.log(a.toString());
console.log("\n");

console.log("insertamos en carro patata:1,boniato:2,leche:4");
a.importObject(d);
console.log(a.toString());
console.log("\n");

console.log("eliminamos de carro manzana:1,pera:2,aguacate:4");
a.deleteObject(e);
console.log(a.toString());
console.log("\n");
