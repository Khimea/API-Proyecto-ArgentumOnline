const { async } = require('rxjs');

const replaceClass  = async (object) => {
    let jsonResult = object;
    let jsonClass= require("../clasesIndex.json");
    for (var i = 0; i < jsonResult.length; i++) {
        jsonResult[i].class_id = jsonClass[jsonResult[i].class_id];
    }
return jsonResult;
};

module.exports =
{
    replaceClass,
}