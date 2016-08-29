
// smooth scrolling
// var $root = $('html, body');
//       $('.navbar-nav a').click(function() {
//         var href = $.attr(this, 'href');
//         $root.animate({
//           scrollTop: $(href).offset().top
//         }, 500, function () {
//           window.location.hash = href;
//         });
//         return false;
//       });

$(document).ready(function() {

  // responsive navbar / autoclose
	$("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
  });

  // stellar/parallax-effect  
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 50.5
  });
	
});



