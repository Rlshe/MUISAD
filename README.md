#MUISAD

Proyecto de sad

Tarea 2

Chat web

Para conectarse se debe primero introducir el nombre de usuario. En caso de no haber ningún usuario con ese nombre se podrá realizar la conexión. En caso contrario se indicara que es nombre no está disponible y que se introduzca otro.

Para mandar un mensaje general dejar el cuadro de input superior vacío y rellenar el inferior ocn el mensaje que se desea enviar. Para enviar un mensaje privado poner en el cuadro de input superior el nombre de algun usuario conectado. En caso de escribirlo mal se indicara que ese usuario no está conectado y no se enviará nada.

A un lado de la interfaz aparece una lista con los usuarios conectados actualmente

En index.html encontramos la interfaz y las funciones que realiza el cliente como enviar mensajes a otros clientes o imprimir mensajes recibidos de otros clientes.

En index.js encontramos el código del servidor, que recibe mensajes de los clientes y los redirige a los clientes adecuados.



Existen varios tipos de mensajes:

-connection: primer mensaje, establece la conexion con el servidor. no se finaliza la conexión hasta no conseguir un nombre adecuado(si hay otro usuario con el mismo nombre hace la conexion y lo comprueba, al ver que existe cierra la conexión y notifica.

-cancelConnection: Cancela la conexión en caso de haber un usuario conectado con el mismo nombre.

-ConectSuccesful: Se le notifica al usuario conectado que se ha podido conectar, permitiendole escribir y enviar mensajes.

-conectedUser: notifica a los usarios que se ha conectado otro usuario, estos los muestran en interfaz y se incorpora a su lista de usuarios conectados.

-prevConectedUser: Se envía a un usuario recien conectado una los usuarios que hay conectados en el servidor.

-disconnect: Se notifica al resto de usuarios que un usuario se ha desconectado.

-chat message: un usuario envia un mensaje general. se notifica al resto de los usuarios con el contenido del mensaje.

-private message: un usuario envia un mensaje privado. Se notifica a ese usuario y se muesta como mensaje privado.

-typing: Se notifica al resto de usuarios que hay un usuario escribiendo.

-debug: Se usa unicamente para que el servidor pueda ver algun mensaje importante para hacer debug.
