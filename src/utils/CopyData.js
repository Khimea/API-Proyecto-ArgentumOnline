const { async } = require('rxjs');
const ftp = require("basic-ftp") 
const actualizarBD = require("./actualizarBD.js");


const host = "IP DEL HOST";
const user = "USER DEL FTP";
const psswd = "CONTRASEÑA DEL FTP"

const FtpConnect = async () => {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("INICIO LA ACTUALIZACION DB")
        await client.access({
            host: host,
            user: user,
            password: psswd,
            secure: true
        })
        await client.cd("PATH DEL FTP");
        await client.downloadTo("Database1.db", "Database.db");
        
    console.log("DESCARGO DB")
    
    
    }
    catch(err) {
        console.log(err)

    }
    client.close()
    await actualizarBD.borrarBD();
    await actualizarBD.actualizarBD();
};
module.exports =
{
    FtpConnect,
}