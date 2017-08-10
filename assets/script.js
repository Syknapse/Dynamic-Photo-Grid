$(document).ready();

//*****show & hide************

setTimeout(function() {
    $('.layerOne').show();
}, 2000);

setTimeout(function() {
    $('.layerOne').hide();
}, 10000); // <-- time in milliseconds

//**********layerThree*********

setTimeout(function() {
    $('.layerThree').show();
}, 10000);

setTimeout(function() {
    $('.layerThree').hide();
}, 25000); // <-- time in milliseconds

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

//**********layerThree*********
$("#box-one-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-one-l3 ').show();
}, 10500);

$("#box-two-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-two-l3').show();
}, 11500);

$("#box-three-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-three-l3').show();
}, 12500);

$("#box-four-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-four-l3').show();
}, 13500);

$("#box-five-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-five-l3').show();
}, 18500);

$("#box-six-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-six-l3').show();
}, 15500);

$("#box-seven-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-seven-l3').show();
}, 16500);

$("#box-eight-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-eight-l3').show();
}, 17500);

$("#box-nine-l3 > div:gt(0)").hide();
setTimeout(function() {
    $('#box-nine-l3').show();
}, 18500);

