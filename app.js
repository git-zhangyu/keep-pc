//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
// const index=require("./routes/index");
const lesson= require("./routes/lesson");
const user=require("./routes/user");

var app = express();
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
const cors = require("cors");
//2.2:允许哪个地址跨域访问
app.use(cors({
  origin: ["http://127.0.0.1:3001",
    "http://localhost:3001",
    "http://localhost:3000",
    "http://76e64b32.ngrok.io"
  ],
  credentials: true
}));
var server = app.listen(3000);

//托管静态资源到public目录下
app.use(express.static('static'));
/*使用路由器来管理路由*/
// app.use("/index",index);
app.use("/lesson", lesson);
app.use("/user", user);


