$(document).ready();

$(".box-one > div:gt(0)").hide();

setInterval(function() { 
  $('.box-one > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('.box-one');

},  1000);	//time control between slides