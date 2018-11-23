var pool = require("../pool");

module.exports = function(sql, params){
    return new Promise((open, error)=>{
        pool.query(sql, params, (err, result)=>{
            if (err) error(err);
            else open(result);
        })
    });
}