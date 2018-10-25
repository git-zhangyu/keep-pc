  //登陆后获取sessionStorage的值
  var uname = sessionStorage.getItem("uname");
  var login = document.getElementById("login");
  var logout = document.getElementById("logout")
  if (uname) {
    login.style.display = "none";
    logout.style.display = "inline";
    logout.children[1].innerHTML += uname;
    logout.children[2].onclick = function (e) {
      e.preventDefault();
      sessionStorage.clear();
      history.go(0);
    }
  } else {
    login.style.display = "inline";
    logout.style.display = "none";
  }