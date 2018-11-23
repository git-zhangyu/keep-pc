const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

var user = require("./router/user");
var diary = require("./router/diary");
var topic = require("./router/topic");

var app = express();

app.listen(8084);
// 配置跨域模块，允许哪个地址跨域访问
app.use(cors({
    orign:["http://localhost:8080",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:80",
    "http://localhost:80"],
    credentials: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.use("/user", user);
app.use("/diary", diary);
app.use("/topic", topic);
