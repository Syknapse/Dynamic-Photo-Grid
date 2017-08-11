$(document).ready();

//*****show & hide************

	//*****layerOne************

	setTimeout(function() {
	    $('.layerOne').show();
	}, 100);

	setTimeout(function() {
	    $('.layerOne').hide();
	}, 1999); // <-- time in milliseconds

	//**********layerTwo*********

	setTimeout(function() {
	    $('.layerTwo').show();
	}, 2000);

	setTimeout(function() {
	    $('.layerTwo').hide();
	}, 3800); // <-- time in milliseconds

	//**********layerThree*********

	setTimeout(function() {
	    $('.layerThree').show();
	}, 3800);

	setTimeout(function() {
	    $('.layerThree').hide();
	}, 6000); // <-- time in milliseconds

	//*****layerFour************

	setTimeout(function() {
	    $('.layerFour').show();
	}, 6000);

	setTimeout(function() {
	    $('.layerFour').hide();
	}, 10000); // <-- time in milliseconds


//***********Effects********************

	//**********layerTwo Effect*********
	setTimeout(function() {
	    $('#img-1').show();
	}, 2000);

	setTimeout(function() {
	    $('#img-2').show();
	}, 2200);

	setTimeout(function() {
	    $('#img-3').show();
	}, 2400);

	setTimeout(function() {
	    $('#img-4').show();
	}, 2600);

	setTimeout(function() {
	    $('#img-5').show();
	}, 2800);

	setTimeout(function() {
	    $('#img-6').show();
	}, 3000);

	setTimeout(function() {
	    $('#img-7').show();
	}, 3200);

	setTimeout(function() {
	    $('#img-8').show();
	}, 3400);

	setTimeout(function() {
	    $('#img-9').show();
	}, 3600);
	//**********End layerTwo Effect*********

	//***********layerFour***********
		// Effect A***********

		$("#box-one > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-one > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-one');
		},  4000);	//time control between slides

		$("#box-three > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-three > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-three');
		},  4000);	//time control between slides

		$("#box-five > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-five > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-five');

		},  3800);	//time control between slides

		$("#box-seven > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-seven > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-seven');

		},  4000);	//time control between slides

		$("#box-nine > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-nine > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-nine');
		},  4000);	//time control between slides


		// Effect B ****************

		$("#box-two > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-two > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-two');
		},  4100);	//time control between slides

		$("#box-four > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-four > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-four');
		},  4000);	//time control between slides

		$("#box-six > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-six > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-six');
		},  4200);	//time control between slides

		$("#box-eight > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-eight > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-eight');
		},  4300);	//time control between slides
		//**********End layerFour Effect*********
	
