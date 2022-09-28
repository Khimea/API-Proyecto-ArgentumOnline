const { Router } = require('express');
const router = Router();
const ConnectDB = require("../utils/ConnectDB.js");

router.get('/getRankingKills', async (req, res)=>{ 
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const resultElements = await ConnectDB.connectSQL("SELECT name , killed_users FROM user ORDER by killed_users DESC LIMIT 50");
        res.status(200).json(resultElements); 
    } catch(e) {
        console.log(e); 
        res.sendStatus(500);
    }
});
 
module.exports = router;