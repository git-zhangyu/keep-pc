var fn =function(){
    if ($(".banner1").hasClass("banner_left")) {
      $(".banner1")
        .removeClass("banner_left")
        .addClass("banner_right")
        .next()
        .removeClass("banner_center")
        .addClass("banner_left")
        .next()
        .removeClass("banner_right")
        .addClass("banner_center")
    } else if ($(".banner1").hasClass("banner_center")) {
      $(".banner1")
        .removeClass("banner_center")
        .addClass("banner_left")
        .next()
        .removeClass("banner_right")
        .addClass("banner_center")
        .next()
        .removeClass("banner_left")
        .addClass("banner_right")
    } else {
      $(".banner1")
        .removeClass("banner_right")
        .addClass("banner_center")
        .next()
        .removeClass("banner_left")
        .addClass("banner_right")
        .next()
        .removeClass("banner_center")
        .addClass("banner_left")
    }
  }
var cour=setInterval(fn,3000);
$(".banner").on("mouseenter",".banner1",function (){
  if ($(this).hasClass("banner_left")) {
    $(this).removeClass("banner_left")
      .addClass("banner_center")
      .next()
      .removeClass("banner_center")
      .addClass("banner_right")
      .next()
      .removeClass("banner_right")
      .addClass("banner_left")
  } else if ($(".banner1").hasClass("banner_right")) {
    $(".banner1")
      .removeClass("banner_right")
      .addClass("banner_center")
      .next()
      .removeClass("banner_left")
      .addClass("banner_right")
      .next()
      .removeClass("banner_center")
      .addClass("banner_left");
    }
})
$(".banner").on("mouseenter", ".banner2", function () {
  if ($(this).hasClass("banner_left")) {
    $(this).removeClass("banner_left")
      .addClass("banner_center")
      .next()
      .removeClass("banner_center")
      .addClass("banner_right")
      .prev()
      .prev()
      .removeClass("banner_right")
      .addClass("banner_left")
  } else if ($(this).hasClass("banner_right")) {
    $(this)
      .removeClass("banner_right")
      .addClass("banner_center")
      .next()
      .removeClass("banner_left")
      .addClass("banner_right")
      .prev()
      .prev()
      .removeClass("banner_center")
      .addClass("banner_left");
  }
})
$(".banner").on("mouseenter", ".banner3", function () {
  if ($(this).hasClass("banner_left")) {
    $(this).removeClass("banner_left")
      .addClass("banner_center")
      .prev()
      .removeClass("banner_right")
      .addClass("banner_left")
      .prev()
      .removeClass("banner_center")
      .addClass("banner_right")
  } else if ($(this).hasClass("banner_right")) {
    $(this)
      .removeClass("banner_right")
      .addClass("banner_center")
      .prev()
      .removeClass("banner_center")
      .addClass("banner_left")
      .prev()
      .removeClass("banner_left")
      .addClass("banner_right");
  }
})
$("nav>div.banner>div").click(function(){
  window.open(`${$(this).attr("data-target")}`,"_black")
})