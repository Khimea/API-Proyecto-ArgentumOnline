const { Router } = require('express');
const router = Router();
const ConnectDB = require("../utils/ConnectDB.js");
const arrClassJson = require("../utils/arrClassJson.js");
const arrFaccJson = require("../utils/arrFaccionJson.js");

router.get('/getStats/:name', async (req, res)=>{ 
    try {
        var nickname =  req.params.name;
        res.header('Access-Control-Allow-Origin', '*');
        var resultElements = await ConnectDB.connectSQL("SELECT name, level,class_id,killed_npcs,status,ciudadanos_matados,criminales_matados FROM user WHERE UPPER(name)=upper('"+nickname+"')");
        resultElements = await arrClassJson.replaceClass(resultElements);
        resultElements = await arrFaccJson.replaceFacc(resultElements);
        res.status(200).json(resultElements); 
    } catch(e) {
        console.log(e); 
        res.status(404).json("Usuario no encontrado"); 
    }
});
 
module.exports = router;