const express = require("express");
const query = require("./tools");
const pool = require("../pool");
var router = express.Router();

// 获取精选话题的总数
router.get("/listTotal", (req, res)=>{
  console.log('listTotal-------')
  var sql = "SELECT count(*) count FROM k_topic_content";
  query(sql).then(result=>{
    console.log(result[0].count);
    res.send({code:1, msg:result[0].count});
  });
});
// 获取 精选话题
router.get("/listByHot", (req, res)=>{
  var {pno, pageSize} = req.query;
  console.log(pno, pageSize)
  if(!pno){
      pno = 1;
  }
  if(!pageSize){
    pageSize = 3;
  }
 // var offset = (parseInt(pno) - 1) * parseInt(pageSize);
  pageSize = parseInt(pageSize);
  console.log("diary listByHot");
  var sql = "SELECT id,uid,unickname,avatar,create_time,content,likes,comment,star,pic,starUid,status FROM k_topic_content ORDER BY likes desc LIMIT ?,?";
  query(sql, [0,pageSize*pno]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 获取 精选话题
router.get("/listByTime", (req, res)=>{
  var {pno, pageSize} = req.query;
  console.log("listByTime",pno, pageSize)
  if(!pno){
      pno = 1;
  }
  if(!pageSize){
    pageSize = 3;
  }
  //var offset = (parseInt(pno) - 1) * parseInt(pageSize);
  pageSize = parseInt(pageSize);
  console.log("diary listByTime");
  var sql = "SELECT id,uid,unickname,avatar,create_time,content,likes,comment,star,pic,starUid,status FROM k_topic_content ORDER BY create_time desc LIMIT ?,?";
  query(sql, [0,pageSize*pno]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 点赞或是取消
router.get("/addStar", (req, res)=>{
  var {id,starUid,star,isfollow,uid} = req.query;
 // console.log('addStar', id,starUid,star,isfollow,uid);
  // 点赞
  if(isfollow == 'true'){
    starUid = starUid + ','+uid;
  // console.log('starUid----------点赞',starUid);
  }else{ // 取消
    var arr = starUid.split(',');
    var idx = arr.indexOf(uid);
    arr.splice(idx,1);
    starUid = arr.join(',');
    //console.log('starUid----------取消',starUid);
  }
  var sql = "UPDATE k_topic_content SET star=? , starUid=?, isfollow=? WHERE id=?";
  query(sql, [star,starUid,isfollow,id]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 获取一条topic信息
router.get("/getTopic", (req, res)=>{
  var id = req.query.id;
 // console.log('getTopic--------------',id);
  var sql = "SELECT * FROM  k_topic_content WHERE id=?";
  query(sql, [id]).then(result=>{
    res.send({code:1, msg:result});
  });
})


module.exports = router;
