const createPorcet  = async (object) => {
    let jsonResult = object;
    var nivel ;
    for (var i = 0; i < jsonResult.length; i++) {
        nivel = jsonResult[i].level;
        expactual = jsonResult[i].exp;
        
        jsonResult[i].porciento = percentage(nivel,expactual);
    }
return jsonResult;
};
function percentage(nivel, expactual) {
    if (nivel == 47) {
        return 0;
    }
    let jsonexp = require("../expxlvl.json");
    let expnec = jsonexp[nivel]; 
    return  Math.round((100 * expactual) / expnec);
 }  

  
module.exports =
{
    createPorcet,
}