const express = require("express");
const query = require("./tools");
const pool = require("../pool");
var router = express.Router();

// 获取用户 hot 运动日记
router.get("/hotdiary", (req, res)=>{
  var {pno, pageSize} = req.query;
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 6;
  }
  pageSize = parseInt(pageSize)
  var offset = (parseInt(pno)-1)*parseInt(pageSize);
  console.log("diary hotdiary----------");
  var sql = "SELECT did,uid,tid,title,content,location,pic,training_count,star_count,comment_count, create_time FROM k_training_diary ORDER BY star_count desc LIMIT ?,?";
  pool.query(sql, [offset,pageSize],(err,result)=>{
    if(err) throw err;
    res.send({code:1, msg:result});
  });
});
// 获取diary总页数
router.get("/getdiarysum", (req, res)=>{
  console.log("diary getdiarysum----------");
  var sql = "SELECT count(*) pages FROM k_training_diary";
  pool.query(sql, (err,result)=>{
    if(err) throw err;
    res.send({code:1, msg:result});
  });
});
// 获取一条diary信息
router.get("/getDiary", (req, res)=>{
  var id = req.query.id;
  console.log('getDiary--------------',id);
  var sql = "SELECT * FROM  k_training_diary WHERE did=?";
  query(sql, [id]).then(result=>{
    console.log(result);
    res.send({code:1, msg:result});
  });
})

// 获取 精选话题
router.get("/topic", (req, res)=>{
  console.log("diary topic");
  var sql = "SELECT id,pic,title,count,content FROM k_topic ORDER BY count desc LIMIT ?,?";
  query(sql, [0,4]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 获取 精选合集
router.get("/collection", (req, res)=>{
  console.log("diary collection");
  var sql = "SELECT id,pic,title,subTitle FROM k_collection ORDER BY count desc LIMIT ?,?";
  query(sql, [0,4]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 获取 banner
router.get("/banner", (req, res)=>{
  console.log("diary banner");
  var sql = "SELECT id,pic,title FROM k_banner";
  query(sql).then(result=>{
    res.send({code:1, msg:result});
  });
});


module.exports = router;
