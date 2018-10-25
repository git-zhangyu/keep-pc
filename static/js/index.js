  var height = video.clientHeight;
  document.write('<style>.body_container{padding-top:' + height + 'px !important;}.video_background{padding-bottom:' + height + 'px !important;}.vb_body{padding-top:' + height * .28 + 'px !important;}.video_bottom{top:' + height * .85 + 'px !important;}</style>');
  v2_play.onclick = function () {
    video2.style.display = "block";
    video2_m.play();
  }
  v2_close.onclick = function () {
    video2.style.display = "none";
    video2_m.pause();
  }
// 列表滚动条
  setInterval(function () {
    var lis = $("#running_ul").children()
    for (var i = -1; i < lis.length; i++) {
      if (i == -1) {
        $(lis[lis.length - 1]).replaceWith(`<li>${$(lis[0]).html()}</li>`);
      } else {
        $(lis[i]).replaceWith(`<li>${$(lis[i + 1]).html()}</li>`);
      }
    };
    $("#running_ul>li:first-child()").animate({
      opacity: 0,
    }, 2000);
    $("#running_ul>li:last-child()").addClass("d-none").prev().addClass("d-none");
  }, 2000)
