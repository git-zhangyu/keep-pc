// 用户注册路由
const express = require('express');
const pool = require('../pool.js'); //导入连接数据库的模块
var router = express.Router();
router.post('/add', (req, res) => {
  var obj = req.body;
  //对客户端所传递的数据进行验证
  console.log(req.body);
  var $uname = obj.uname;
  if (!$uname) { // $uname == ''
    res.send({
      code: 401,
      msg: 'uname required'
    });
    //禁止程序继续执行
    return;
  }
  //对密码验证，邮箱，手机进行验证
  var $upwd = obj.upwd;
  if (!$upwd) {
    res.send({
      code: 402,
      msg: 'upwd required'
    });
    return;
  }
  var $phone = obj.phone;
  if (!$phone) {
    res.send({
      code: 404,
      msg: 'phone required'
    });
    return;
  }
   var $gender = obj.gender;
  //把数据插入到数据库中
  var sql = 'INSERT INTO keep_user VALUES (NULL, ?, ?, ?, NULL, NULL, ?, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);';
  pool.query(sql, [$uname, $upwd, $phone,$gender], (err, result) => {
    if (err) throw err;
    //提示注册成功
    if (result.affectedRows> 0) {
      res.send(`<script>alert('注册成功');location.href='http://127.0.0.1:3000/index.html'</script>`)
    } else {
      res.send(`<script>alert('注册失败');location.href='http://127.0.0.1:3000/index.html'</script>`)
    }
  });
});
// 用户登录路由
router.post('/login', (req, res) => {
  var obj = req.body;
  //验证用户名和密码是否为空
  var $phone = obj.phone;
  if (!$phone) {
    res.send({
      code: 401,
      msg: 'phone required'
    });
    return;
  }
  var $upwd = obj.upwd;
  if (!$upwd) {
    res.send({
      code: 402,
      msg: 'upwd required'
    });
    return;
  }
  //查询数据库中是否含有这条记录
  //同时满足用户名为$uname和密码$upwd
  var sql = 'SELECT * FROM keep_user WHERE phone=? AND upwd=?';
  pool.query(sql, [$phone, $upwd], (err, result) => {
    if (err) throw err;
    //result 返回结果是数组
    //如果数组的长度大于0，说明找到满足条件的记录
    //否则数组的长度等于0，说明没有找到满足条件的记录
    if (result.length > 0) {
      res.send(`<script>alert('登录成功');sessionStorage.setItem("uname","${result[0].uname}");location.href='http://127.0.0.1:3000/index.html'</script>`)
    } else {
      res.send(`<script>alert('用户名或密码错误');location.href='http://127.0.0.1:3000/index.html'</script>`)
    }
  });
});
// 小程序微信登录
router.get("/reg",(req,res)=>{
  var uid=req.query.uid;
  var sql = 'SELECT * FROM keep_user WHERE uid=?';
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports = router;