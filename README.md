# MUISAD
Proyecto de sad

modulo de carrito
class Carro 
new carrito(object)
  para crear un carro
  
importObject(object)
  para anañadir objetos al carro
  
deleteObject(object)
  elimina objetos que hay en el carro
  
toString()
  return lista de objeto en String


probar_carro.js

Script para probar el modulo de carrito

Creamos un objeto carro y le insertamos y eliminamos items. La información se muestra por terminal.



cliente-mongo2.js

moculo para conexión con mongo db con 3 funciones: 
connect() para conectar con una base de datos mongodb creada en atlas
close() para cerrar la conexión de la base de datos
finditems(item, quant) para buscar los items en la base de datos, este metodo tiene los parametros item(nombre del item que se busca) y quant(cantidad que se comprueba), en caso de haber mas de la cantidad pedida se indica que existe el producto por consola y se devuelve true, en caso de no haber bastante stock o no haber productos se  lanza un error personalizado en cada caso.

Base de datos atlas contiene 3 items palos, con 0 en stock, tornillos, con 10 en stock y muelles, con 5 en stock




probar-mongo.js

este script realiza una conexión a la base de datos con el metodo connect de cliente-mongo2.js. Realiza 3 busquedas de 3 items y devuelve si dichos items se pueden meter o no en el carrito. Finalmente cierra la conexión.
