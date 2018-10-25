$(function(){
  jQuery.fn.sum=function(){
  var $elem=this;
  var sum =0;
  $elem.each(function(i,elem){
    var $elem =$(elem);
    sum+=parseInt($elem.html());
  })
  return sum;
}
jQuery.fn.accordion = function () {
  this.on("click", ".title", e =>
    $(e.target).next(".content").toggleClass("in")
    .siblings(".content").removeClass("in")
  );
  this.addClass("accordion")
    .children(":even")
    .addClass("title")
    .next()
    .addClass("content fade")
    .first()
    .addClass("in")
}
jQuery.fn.tabs=function(){
  this.on("click", "[data-toggle=tab]", e => {
    var $tar = $(e.target);
    if (!$tar.parent().is(".active")) {
      $tar.parent().addClass("active")
        .siblings().removeClass("active");
      var id = $tar.attr("data-target");
      $(id).addClass("active")
        .siblings().removeClass("active");
    }
  })
  this.children("ul")
      .addClass("tabs")
      .children()
      .children()
      .attr("data-toggle", "tab")
      .parent(":first")
      .addClass("active")
      .parent()
      .next()
      .addClass("container")
      .children(":first")
      .addClass("active")
}
)}