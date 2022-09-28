const express = require('express');
const app = express();
const FtpConnect = require ("./utils/CopyData")
const morgan=require

//Routes
app.use(require('./routes/Check'));
app.use(require('./routes/getRanking'));
app.use(require('./routes/getRankingGLD'));
app.use(require('./routes/getRankingKills'));
app.use(require('./routes/getRankingKillsNPCs'));
app.use(require('./routes/getStats'));

FtpConnect.FtpConnect()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
setInterval(FtpConnect.FtpConnect, 300000);
//Configuraciones
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2)


//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);


    
    
});