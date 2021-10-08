class Carro {
    constructor(object) {
        this.object=object;
    };
    get Object(){
        return this.object;
    };

    importObject(object){
        for(let property in object){
            let anadido=false;
            for(let property1 in this.object){
                
                if(property == property1){
                    this.object[property]=this.object[property]+object[property];
                    anadido=true;
                }
            }
            if (!anadido){
                this.object[property]=object[property];
            }
            
        }
    };

    deleteObject(object)
    {
        for(let property in object){
            let anadido=false;
            for(let property1 in this.object){
                
                if(property == property1){
                    this.object[property]= this.object[property]-object[property];
                    if (this.object[property]<=0) delete this.object[property];
                    anadido=true;
                }
            }
            if (!anadido){
                console.log("No esta Todos los elementos");
            }
            
        }
    };

    toString(){
          let res="";
          for(const property in this.object) {
                res=res+" \n "+(property+':'+ +this.object[property]);
          };
          return res;
    };
    
}

let a = new Carro({});
const b = {patata:1,cebolla:2,agua:4};
const c = {patata:1,boniato:2,leche:4};
a.importObject(b);
a.deleteObject(b);
a.importObject(c);
console.log(a.toString());


