function paly_video() {
  document.getElementById("video2").style.display = "block";
  document.getElementById("video2_m").play();
}

function play_over() {
  document.getElementById("video2").style.display = "none";
  document.getElementById("video2_m").pause();
}
function radio_women() {
  point.setAttribute("style","right:161px")
}
function radio_man() {
  point.setAttribute("style", "right:268px")
}
function my_login() {
  login.setAttribute("style", "border-bottom:1px solid #ddd;color:#ddd;");
  reg.setAttribute("style","border-bottom:none;color:#918B8D");
  user_name.setAttribute("style", "display:none;");
  user_gender.setAttribute("style", "display:none;");
  p1.setAttribute("style", "display:block;");
  p2.setAttribute("style", "display:none;");
}
function my_reg() {
  login.setAttribute("style", "border-bottom:none;color:#918B8D");
  reg.setAttribute("style", "border-bottom:1px solid #ddd;color:#ddd;padding-bottom:8px;");
  user_name.setAttribute("style", "display:block;");
  user_gender.setAttribute("style", "display:block;");
  p1.setAttribute("style", "display:none;");
  p2.setAttribute("style", "display:block;");
}
/*var login = document.getElementById("login");
var reg = document.getElementById("reg");
login.onclick=function(){
  var user_name = document.getElementById("user_name");
  var user_gender = document.getElementById("user_gender");
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  user_name.style.display="none";
  user_gender.style.display="none";
  p1.style.display="block";
  p2.style.display="none";
}
reg.onclick = function () {
  var user_name = document.getElementById("user_name");
  var user_gender = document.getElementById("user_gender");
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  user_name.style.display = "block";
  user_gender.style.display = "block";
  p1.style.display = "none";
  p2.style.display = "block";
}*/