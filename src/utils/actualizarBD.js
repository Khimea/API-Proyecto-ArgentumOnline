const fs = require('fs');
const borrarBD = async () => {
try{
 var sourceUrls = "./Database.db";
 fs.unlinkSync(sourceUrls);
 console.log("SE BORRA BASE VIEJA")

}catch(err){
 console.log(err);
}
}

const actualizarBD = async () => {
    fs.rename('./Database1.db', './Database.db', function(err) {
        console.log("SE ACTUALIZA NOMBRE")
        if ( err ) console.log('ERROR: ' + err);
    });
}
module.exports =
{
    actualizarBD,
    borrarBD,
}