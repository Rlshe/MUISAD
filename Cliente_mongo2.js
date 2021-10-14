const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://user:user@cluster0.32wyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect(){
    await client.connect();
}

async function close(){
    await client.close();
}

async function findItem(item,quant){

    try {    
        return await listDatabases(client, item, quant);
    } catch (e) {
        throw e;
    }
  
}


async function listDatabases(client, item, quant){

    databasesList = await client.db('test').collection('almacen').findOne({desc: item}).then((res) => {
        return res;
    });

    if (databasesList == null){
        throw 'no existe el producto ' + item;
    } else if(databasesList.stock >= quant){
        console.log("hay stock de " + item);
        return true;
    } else {
        throw 'no hay stock de ' + item;
    }
};

/*
findItem("hierros",11).then(v => {
    console.log(v);
});*/

module.exports = {findItem, connect, close};