const express = require("express");
const query = require("./tools");
const pool = require("../pool");
const utility = require("utility");
var router = express.Router();

// 用户注册
router.get("/register", (req, res)=>{
  console.log("register");
  var {mobile, password, username, gender} = req.query;
  password = utility.md5(password);

  var sql = "INSERT INTO k_user(phone,upwd,unickname,gender) VALUES(?,?,?,?)";
  pool.query(sql, [mobile,password,username,gender],(err,result)=>{
    if(err) throw err;
    console.log("插入成功");
    res.send({code:1, msg:'注册成功, 请登录'});
  })
});

// 用户登录
// http://localhost:8084/user/login?mobile=12345678901&password=123
router.get("/login", (req, res)=>{
  console.log("login");
  var {mobile, password} = req.query;
  password = utility.md5(password);
  console.log(mobile, password);

  var sql = "SELECT * FROM k_user WHERE phone=? and upwd=?";
  pool.query(sql, [mobile,password],(err,result)=>{
    if(err) throw err;
    if(result.length > 0){
      console.log("用户名密码都正确");
      res.send({code:1, msg:result});
    }else{
      res.send({code:0, msg:"用户名或密码不正确"});
    }
  })
});

// 检查用户名 mobile 是否已被注册
router.get("/checkMobile", (req, res)=>{
  var phone = req.query.mobile;
  var sql = 'select count(*) count from k_user where phone=?';
  query(sql, [phone]).then(result=>{
    console.log('result-----', result)
    var count = result[0].count
    if(count == 0){
      res.send({code:1, msg:count})
    }else{
      res.send({code:0, msg:count})
    }
  })
});
// 获取具体用户信息
router.get("/details", (req, res)=>{
  var uid = req.query.uid;
  var sql = "select background_img backgroundImg,avatar,gender,unickname,introduce,address,register_time, ";
  sql += "(select count(*) from k_friend where uid=? and  status in (0,2)) follow, ";
  sql += "(select count(*) from k_friend where uid=? and  status in (1,2)) focus ";
  sql += "FROM k_user WHERE uid=?";
  var user;

  query(sql,[uid,uid,uid]).then(result=>{
      user = result[0];

      // 分组sql
      sql = "SELECT tid,title,time,max(training_count) dynamic FROM k_training_diary WHERE uid=? group by tid order by training_count desc";
      return query(sql,[uid])
    }).then(result=>{
      // 动态总数
      var dynamic = 0;
      result.map(elem=>{
        dynamic += elem.dynamic;
      });
      // 总运动时间
      var trainSumTime = 0;
      result.map(elem=>{
        trainSumTime += (elem.dynamic*elem.time);
      });
      user.dynamic = dynamic;
      user.trainSumTime = trainSumTime;

      // 最近一周运动时间
      var nowdate = new Date();
      var dd = nowdate.getDate();
      // 判断比当前日期小7天的日期，sql查询日期大于nowdate
      nowdate.setDate(dd -7);
      sql = "SELECT tid,title,time,create_time  FROM k_training_diary WHERE uid=? and create_time > ?";
      console.log(user)
      return query(sql, [uid,nowdate]);
    }).then(result=>{

      var trainWeekTime = 0;
      result.map(elem=>{
        trainWeekTime+= elem.time;
      });
      user.trainWeekTime = trainWeekTime;

      console.log(user);
      res.send({code:1, msg:user});
    })

});

// 获取用户运动日记
router.get("/diary", (req, res)=>{
  var uid = req.query.uid;
  console.log('diary------------',uid)
  var sql = "SELECT did,create_time, title,location,time,training_count trainingCount,content,pic,star_count,comment_count FROM k_training_diary WHERE uid=? ORDER BY create_time DESC";

  query(sql, [uid]).then(result=>{
    res.send({code:1, msg:result});
  });
});

// 获取用户 hot 运动日记
router.get("/hotdiary", (req, res)=>{
  var uid = req.query.uid;
  var sql = "SELECT did,create_time, title,location,time,training_count trainingCount,content,pic,star_count,comment_count FROM k_training_diary WHERE uid=? and star_count>? ORDER BY star_count DESC LIMIT ?,?";
  query(sql, [uid, 1, 0,3]).then(result=>{
    res.send({code:1, msg:result});
  });
});


// 查询用户关系 多个
router.get("/follow", (req, res)=>{
  console.log("follow");
  var {uid} = req.query;

  var sql = "select * from k_friend where uid=?;";
  pool.query(sql, [uid],(err,result)=>{
    if(err) throw err;
    console.log("follow",result);
    res.send({code:1, msg:result});
  });
});
// 查询用户关系 与一个用户
router.get("/followByFid", (req, res)=>{
  console.log("followByFid");
  var {uid, fid} = req.query;

  var sql = "select * from k_friend where uid=? and fid=?;";
  pool.query(sql, [uid,fid],(err,result)=>{
    if(err) throw err;
    console.log("followByFid",result);
    if(result.length>0){
      res.send({code:1, msg:result});
    }else{
      res.send({code:0, msg:"没有关注"});
    }

  });
});

// 关注切换
router.get("/followed", (req, res)=>{
  console.log("notfollow");
  var {uid,fid,status} = req.query;
  console.log('uid,fid,status', uid,fid,status);
  var fstatus = 2;

  if(status == 0){
    fstatus = 1;
  }

  if(status==0 || status==2){ // 改两个
    var sql = "update k_friend set status = ? where uid=? and fid=?;";
    pool.query(sql, [status,uid,fid],(err,result)=>{
      if(err) throw err;
      sql = "update k_friend set status = ? where uid=? and fid=?;";
      pool.query(sql, [fstatus,fid,uid],(err,result)=>{
        if(err) throw err;
        if(status == 0){console.log("取消关注2--被关注0");}
        else if(status == 2){console.log("被关注0 --互相关注成功2");}

        res.send({code:1, msg:result});
      })
    })
  }else if(status == -1){// 一个人取消关注
    var sql = "delete from k_friend where uid=? and fid=?;";
    pool.query(sql, [uid,fid],(err,result)=>{
      if(err) throw err;
      console.log("取消关注1-- 无关系-1");
      res.send({code:1, msg:result});
    })
  }else if(status == 1){// 第一次关注
    var sql = "insert k_friend values(null,?,?,?);";
    pool.query(sql, [uid,fid,status],(err,result)=>{
      if(err) throw err;
      console.log("-1  --- 1关注成功");
      res.send({code:1, msg:result});
    })
  }

});


module.exports = router;
