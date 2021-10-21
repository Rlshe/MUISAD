const Carro = require('./Carro.js');
const item = require('./Cliente_mongo2.js');


//En otro script PUNTO 2
let a = new Carro({});
const b = {palos:3};
const c = {tornillos:2};
const d = {hierros:7};

item.connect().then(x => {
    console.log("En base de datos hay: palos: 0, tornillos: 10, muelles: 5");


    console.log("intentamos insertar en carro palos: 3");
    console.log("intentamos insertar en carro tornillos: 2");
    console.log("intentamos insertar en carro hierros: 7");
    console.log("\n");



    item.findItem("palos",3).then(v => {
        a.importObject(b);
        console.log(a.toString());
    }).catch(err => {
        console.log(err);
    });
    
    item.findItem("tornillos",2).then(v => {
        a.importObject(c);
        console.log(a.toString());
    }).catch(err => {
        console.log(err);
    });
    
    item.findItem("hierros",7).then(v => {
        a.importObject(d);
        console.log("carrito: " + a.toString());
    }).catch(err => {
        console.log(err);
    }).finally(x=>{item.close();});

    //item.close();
});






/*if (item("tornillos",2)){
    console.log("insertamos en carro tornillos: 2");
    a.importObject(c);
    console.log(a.toString());
    console.log("\n");
}

if (item("hierros",7)){
    console.log("insertamos en carro hierros: 7");
    a.importObject(d);
    console.log(a.toString());
    console.log("\n");
}*/

//AÑADIR COMPROBACION EN MONGODB