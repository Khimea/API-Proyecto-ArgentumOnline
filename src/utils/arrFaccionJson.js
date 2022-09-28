const { async } = require('rxjs');

const replaceFacc  = async (object) => {
    let jsonResult = object;
    let jsonFaccion= require("../statusFaccion.json");
    jsonResult[0].status = jsonFaccion[object[0].status];
return jsonResult;
};

module.exports =
{
    replaceFacc,
}