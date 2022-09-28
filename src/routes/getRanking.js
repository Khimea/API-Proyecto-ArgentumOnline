const { Router } = require('express');
const router = Router();
const ConnectDB = require("../utils/ConnectDB.js");
const arrClassJson = require("../utils/arrClassJson.js");
const arrPorJson = require("../utils/arrPorJson.js");

router.get('/getRanking', async (req, res)=>{ 
    try {
        res.header('Access-Control-Allow-Origin', '*');
        var resultElements = await ConnectDB.connectSQL("SELECT character_name , class_id , level , exp FROM ranking_users ORDER BY level DESC , exp DESC LIMIT 50");
        resultElements = await arrClassJson.replaceClass(resultElements);
        resultElements = await arrPorJson.createPorcet(resultElements);
        res.status(200).json(resultElements); 
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
});
 
module.exports = router;