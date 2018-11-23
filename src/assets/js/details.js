
$(function(){
  $(".timeline .tab-title").on("click", "span", function(){
    var i = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(`.timeline .tab-content:eq(${i})`).addClass("active").siblings().removeClass("active");
  });
});

var i=2;
  window.onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(document.body.scrollTop, document.documentElement.scrollTop);
    if(scrollTop>(1600+550*(i-2))){
      i++;
      console.log(i);
      $(".tab-content .entry").eq(i).css({
        "display":"block",
        "transition": "all 2s linear",
        "opacity":1
      });
    }

  }
