const socket=io();
/* io es "socket.io", se le llama así por convención. Aquí arriba se ha instanciado el socket
y se lo guardó en la constante "socket"
Este socket es que se usará para comunicarse con el socket del servidor
Hay que recordar que uno ahora es "cliente" porque se representa una vista.*/


//Ya que el servidor puede escuchar a través de un evento ID "message", hay que enseñarle a nuestro cliente a comunicarse con el servidor.
//asi se puede enviar un mensaje desde el cliente al servidor (o viceversa), se usa la palabra emit, y tiene que estar con el ID del mensaje a enviar, seguido
//del contenido del mensaje. Los IDs deben coincidir para que el mensaje llegue correctamente, (con lo de app.js )
socket.emit("message","Si leés esto, lo logré desde un websocket y funcionaron las comillas dobles")

