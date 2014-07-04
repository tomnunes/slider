jQuery(document).ready(function(){
  function showArrow() {
    jQuery(".grid-slide").each(function(){
          var marginLeft = parseInt(jQuery(this).find(".grid-trail").css("margin-left"));
          var widthLi = parseInt(jQuery(this).find(".grid-trail .grid-item").eq(0).css("width"));
          var quantityEls = jQuery(this).find(".grid-item").size();
          var totalWidth = quantityEls * widthLi;
          var visibleAreaAndLeft = parseInt(jQuery(this).find(".canvas").css("width")) + (marginLeft * -1);
          if ( marginLeft < 0 ){
              jQuery(this).find(".arrow-left").removeClass("arrow-off");
              jQuery(this).find(".arrow-left").addClass("arrow-on");
          }
          else {
              jQuery(this).find(".arrow-left").removeClass("arrow-on");
              jQuery(this).find(".arrow-left").addClass("arrow-off");
          }

          if (totalWidth > visibleAreaAndLeft) {
              jQuery(this).find(".arrow-right").removeClass("arrow-off");
              jQuery(this).find(".arrow-right").addClass("arrow-on");
          }
          else {
              jQuery(this).find(".arrow-right").removeClass("arrow-on");
              jQuery(this).find(".arrow-right").addClass("arrow-off");
          }
          console.log("marginLeft = " + marginLeft);
          console.log("widthLi = " + widthLi);
          console.log("quantityEls = " + quantityEls);
          console.log("totalWidth = " + totalWidth);
          console.log("visibleAreaAndLeft = " + visibleAreaAndLeft);
    })
  }
  showArrow();

  jQuery(".arrow-right").click(function(){
      if (jQuery(this).hasClass("arrow-on")) {
          if (jQuery(".grid-slide .canvas").css("width") <= 645 + "px") {
              var Lis = 3;
          } else {
              var Lis = 4;
          }
          var Slide = jQuery(this).parent(".grid-slide");
          var widthLi = parseInt(jQuery(Slide).find(".grid-item").eq(0).css("width")) * Lis;
          var newMarginLeft = parseInt(jQuery(Slide).find(".grid-trail").css("margin-left")) - widthLi;

          jQuery(Slide).find(".grid-trail").animate({marginLeft: newMarginLeft + "px"}, 500, function() { showArrow(); });
      };

  })
  jQuery(".arrow-left").click(function(){
      if (jQuery(this).hasClass("arrow-on")) {
          if (jQuery(".grid-slide .canvas").css("width") <= 645 + "px") {
              var Lis = 3;
          } else {
              var Lis = 4;
          }
          var Slide = jQuery(this).parent(".grid-slide");
          var widthLi = parseInt(jQuery(Slide).find(".grid-item").eq(0).css("width")) * Lis;
          var newMarginLeft = parseInt(jQuery(Slide).find(".grid-trail").css("margin-left")) + widthLi;

          jQuery(Slide).find(".grid-trail").animate({marginLeft: newMarginLeft + "px"}, 500, function() { showArrow(); });
      };
  })
})
