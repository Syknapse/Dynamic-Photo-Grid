$(document).ready();

//*****show & hide************

$('.layerOne').show(3000);

setTimeout(function() {
    $('.grid').hide();
}, 6000); // <-- time in milliseconds

//*******************************

// Effect A

$("#box-one > div:gt(0)").hide();

setInterval(function() { 
  $('#box-one > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('#box-one');

},  2700);	//time control between slides

$("#box-three > div:gt(0)").hide();

setInterval(function() { 
  $('#box-three > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('#box-three');

},  2700);	//time control between slides

$("#box-five > div:gt(0)").hide();

setInterval(function() { 
  $('#box-five > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('#box-five');

},  2500);	//time control between slides

$("#box-seven > div:gt(0)").hide();

setInterval(function() { 
  $('#box-seven > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('#box-seven');

},  2700);	//time control between slides

$("#box-nine > div:gt(0)").hide();

setInterval(function() { 
  $('#box-nine > div:first')
    .fadeOut(100)
    .next()
    .slideDown(500)
    .end()
    .appendTo('#box-nine');

},  2700);	//time control between slides


// Effect B **************************************

$("#box-two > div:gt(0)").hide();

setInterval(function() { 
  $('#box-two > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#box-two');

},  3100);	//time control between slides

$("#box-four > div:gt(0)").hide();

setInterval(function() { 
  $('#box-four > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#box-four');

},  3000);	//time control between slides

$("#box-six > div:gt(0)").hide();

setInterval(function() { 
  $('#box-six > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#box-six');

},  3200);	//time control between slides

$("#box-eight > div:gt(0)").hide();

setInterval(function() { 
  $('#box-eight > div:first')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('#box-eight');

},  3300);	//time control between slides