(function($) {
  "use strict";

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function() {
    var scroll = wind.scrollTop();
    if (scroll < 1) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // scrollToTop
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: 'Back to top <i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  /* Carousel */
  $(".carousel").carousel();
})(jQuery);
