$(document).ready();

$(".effectA > div:gt(0)").hide();

setInterval(function() { 
  $('.effectA > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('.effectA');

},  2000);	//time control between slides

$(".effectB > div:gt(0)").hide();

setInterval(function() { 
  $('.effectB > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('.effectB');

},  3000);	//time control between slides