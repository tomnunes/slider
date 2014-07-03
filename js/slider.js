jQuery(document).ready(function(){
  function showArrow(productsGrid, gridGeral) {
      var marginLeft = parseInt(gridGeral.find(".grid-trail").css("margin-left"));
      var widthLi = parseInt(gridGeral.find(".grid-trail .grid-item").eq(0).css("width"));
      var quantityEls = productsGrid.size();
      var totalWidth = quantityEls * widthLi;
      var visibleAreaAndLeft = parseInt(gridGeral.find(".canvas").css("width")) + (marginLeft * -1);
      if ( marginLeft < 0 ){
          gridGeral.find(".arrow-left").removeClass("arrow-off");
          gridGeral.find(".arrow-left").addClass("arrow-on");
      }
      else {
          gridGeral.find(".arrow-left").removeClass("arrow-on");
          gridGeral.find(".arrow-left").addClass("arrow-off");
      }

      if (totalWidth > visibleAreaAndLeft) {
          gridGeral.find(".arrow-right").removeClass("arrow-off");
          gridGeral.find(".arrow-right").addClass("arrow-on");
      }
      else {
          gridGeral.find(".arrow-right").removeClass("arrow-on");
          gridGeral.find(".arrow-right").addClass("arrow-off");
      }
      console.log("marginLeft = " + marginLeft);
      console.log("widthLi = " + widthLi);
      console.log("quantityEls = " + quantityEls);
      console.log("totalWidth = " + totalWidth);
      console.log("visibleAreaAndLeft = " + visibleAreaAndLeft);
  }
  showArrow(jQuery(".grid-trail .grid-item"),jQuery(".grid-slide"));

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

          jQuery(Slide).find(".grid-trail").animate({marginLeft: newMarginLeft + "px"}, 500, function() { showArrow(jQuery(this).parent().parent(".grid-slide").find(".grid-item"),jQuery(this).parent().parent(".grid-slide")); });
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

          jQuery(Slide).find(".grid-trail").animate({marginLeft: newMarginLeft + "px"}, 500, function() { showArrow(jQuery(this).parent().parent(".grid-slide").find(".grid-item"),jQuery(this).parent().parent(".grid-slide")); });
      };
  })
})
