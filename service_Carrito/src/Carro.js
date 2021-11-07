const axios = require("axios");

var mongo=false;
var port;
class Carro {
    constructor() {
    };
    get Object(){
        return this.object;
    };
}
carroController = new Carro();

carroController.importObject=async (item,quantity) => {
    if(!mongo){
    const getMongo= () =>  axios.get(`http://localhost:3000/find/mongo-service/1.0.0`)
    getMongo().then(function(result) {
        port = result.data.port;
        mongo=true;
          const addMongo=() => axios.get(`http://localhost:${port}/add/${item}/${quantity}`)
          addMongo().then(function(result){
              return result;
          })
          .catch(function(err) {
            return err;
          });
      })
      .catch(function(err) {
        return err;
      });
    }
    else
    {
        const addMongo=() => axios.get(`http://localhost:${port}/add/${item}/${quantity}`)
          addMongo().then(function(result){
              return result;
          })
          .catch(function(err) {
            return err;
          });
    }
};

carroController.deleteObject=function(object)
    {
        if(!mongo){
        const getMongo= () =>  axios.get(`http://localhost:3000/find/mongo-service/1.0.0`)
        getMongo().then(function(result) {
            port = result.data.port;
            mongo=true;
              const addMongo=() => axios.get(`http://localhost:${port}/delete/${item}/${quantity}`)
              addMongo().then(function(result){
                  return result;
              })
              .catch(function(err) {
                return err;
              });
          })
          .catch(function(err) {
            return err;
          });
        }
        else
        {
            const addMongo=() => axios.get(`http://localhost:${port}/delete/${item}/${quantity}`)
              addMongo().then(function(result){
                  return result;
              })
              .catch(function(err) {
                return err;
              });
        }
    };

    carroController.toString=function(){
          let res="";
          for(const property in carroController.object) {
                res=res+(property+':'+ +carroController.object[property])+"  ";
          };
          return res;
    };
    

module.exports = carroController;