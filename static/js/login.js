// 登录注册切换
$("#mylogin").on("click",".title",function(){
  var $div=$(this);
  $div.addClass("active").siblings().removeClass("active");
  $("#user_name").toggleClass("d-none");
  $("#user_gender").toggleClass("d-none");
  $(".login_bottom>:last").toggleClass("d-none").siblings().toggleClass("d-none");
  if($("#mylogin>:first-child").hasClass("active")){
    $("#mylogin").next().attr({"action":"/user/login"});
	  $("#mybutton")[0].value="登陆";
  }else{
    $("#mylogin").next().attr({"action":"/user/add"});
	  $("#mybutton")[0].value="注册";
  }
})
$("#user_gender").on("click","div>:not(:last)",function(){
  var $last=$("#point");
  if($("#man").prop("checked"))
    $last.css("right", "252px")
  else
    $last.css("right", "138px")
})
