$(function(){
  $("#video-play").click(function(){
    $(".container-fluid").css("display", "none");
    $(".video-solo").css("display", "block");
    $("#video-control")[0].play();
  });
  $(".video-close").click(function(){
    $(".container-fluid").css("display", "block");
    $(".video-solo").css("display", "none");
    $("#video-control")[0].pause();
  });


  /*header menu*/
  $(".icon-menu .iconfont").click(function(){
    $(".keep-tab-wrapper").css("display", "block");
    $(".nav-wrapper-cont").css("display", "none");
    $(".nav-wrapper-more").addClass("active");
  });

  $(".icon-close .iconfont").click(function(){
    $(".nav-wrapper-cont").css("display", "block");
    $(".keep-tab-wrapper").css("display", "none");
    $(".nav-wrapper-more").removeClass("active");
  });

/*dragMan
var startT, endT, startT2, endT2;
$("#dragMan")[0].addEventListener('mousedown', function(e){
  console.log("drag me------start");// e.offsetX, e.offsetY
  console.log(e.offsetX, e.offsetY);
  startT = e.offsetX;
  endT = e.offsetY
})
$("#dragMan")[0].addEventListener('mousemove', function(e){
  console.log("drag me------end");
  console.log(e.clientX, e.clientY);//e.clientX, e.clientY
  startT2 = e.clientX-startT;
  endT2 = e.clientY -endT;
  console.log(startT2, endT2);
  $("#dragMan").css({
    //"left":startT2+73
    //"top":endT2
  });
  $(".animate-heart").css({
  //"left":startT2+188
  });
})*/




});
