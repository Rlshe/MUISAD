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
                console.log("No hay " + property);
            }
            
        }
    };

    toString(){
          let res="";
          for(const property in this.object) {
                res=res+(property+':'+ +this.object[property])+"  ";
          };
          return res;
    };
    
}

module.exports = Carro;