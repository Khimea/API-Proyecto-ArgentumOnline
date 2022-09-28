# API-ProyectoArgentum-SQLite

Este proyecto esta hecho para poder gestionar datos desde la pagina web del servidor de argentum.
Es mi primeros pasos en la tecnologia de API's

En el index.js pongo una linea 
'''
setInterval(FtpConnect.FtpConnect, 300000);
'''
Esta linea se encarga de actualizar la DB cada 5 minutos.

## UTILS
Aca van a estar los arreglos al body que va a devolver la app.<br />
Conexion a BD.<br />
Conexion a FTP.<br />
Explico cada uno mas abajo.<br />

### CopyData.js
Realiza una conexion a un FTP donde se bajara una base de datos SQLite para poder consultarla por los request.
Baja database1.db

### ConnectDB.js
Realiza la conexion con la base de datos SQLite, realiza la consulta y cierra la conexion.

### arrPorJson.js
Ya que el proyecto esta destinado a devolvernos datos de un juego MMORPG contamos con experiencia por level.
En la base de datos esto esta guardado con numeros en cantidad de experiencia, esta clase se encarga de pasar ese numero a porcentaje utilizando un json como guia de cuanta experiencia necesita para pasar de nivel.

### arrFaccionJson.js
El juego tambien cuenta con facciones.
En la base de datos esto se guarda con indices, esta clase se encarga de reemplazar dicho indice por la faccion correspondiente utilizando un json como glosario.

### arrClassJson.js
Al ser un RPG tenemos diferentes clases
En la base de datos la clase tambien se guarda con indices, esta clase se encarga de remplazar dicho indice por la clase correspondiente utilizando un json como glosario.

### actualizarBD.js
Esta clase se encarga de sincronizar la nueva y la vieja base de datos.
Luego de bajar la base de datos se llamara a estas funciones para hacer lo siguiente:<br />
Primero eliminamos la DB vieja (database.db), y luego re nombra la nueva base (database1.db) de datos al nombre correspondiente(database.db).
Tal vez un poco tosco, pero era la unica forma que encontre para que no rompa la APP cuando se consulta en el momento justo que se esta actualizando la DB.


## routes
Todos los routes realizan consulta a la DB.
