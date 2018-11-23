const express = require("express");
const query = require("./tools");
var router = express.Router();

// 获取用户某条动态的 所有评论列表
router.get("/list", (req, res)=>{
    var {did, uid} = req.query;
    var sql = "SELECT * FROM k_diary_comment WHERE did=? AND uid=?";
    query(sql, [did, uid]).then(result=>{
        res.send({code:1, msg:result});
    })
});


module.exports = router;