const { async } = require('rxjs');

const sqlite3 = require('sqlite3').verbose();

const connectSQL = async (query) => {
    const db = new sqlite3.Database('./Database.db');
    let sql = query
    
        return new Promise((resolve, reject)=>{
            db.all(sql, [], (error, elements)=>{
                if(error){

                    console.log();
                    return reject(error);
                }

                return resolve(elements);
            });
        });
        db.close()
    };

    
    
module.exports =
{
    connectSQL,
}