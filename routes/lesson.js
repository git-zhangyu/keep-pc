const express = require('express');
//使用express路由器功能
var router = express.Router();
//使用到数据库连接
const pool = require('../pool.js');
// 课程种类列表
router.get('/', (req, res) => {
  //查询全部课程
  var sql = 'SELECT * FROM keep_lesson ';
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get('/list', (req, res) => {
  //查询全部课程
  var sql = 'SELECT * FROM keep_lesson_list where family_id=? ';
  var $family_id=req.query.family_id
  pool.query(sql,[$family_id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get('/details', (req, res) => {
  //查询全部课程详情
  var sql = 'SELECT * FROM keep_lesson_list where lid=? ';
  var $lid = req.query.lid
  pool.query(sql, [$lid], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get('/recommendation', (req, res) => {
  //查询全部课程
  var sql = 'SELECT  `lesson_list_pic`, `title`, `subtitle`,  `train_num`, `train_body` FROM `keep_lesson_list` WHERE family_id=?';
  var $family_id = req.query.family_id
  pool.query(sql, [$family_id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
module.exports = router;