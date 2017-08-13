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
	}, 5000); // <-- time in milliseconds

	//*****layerFour************

	setTimeout(function() {
	    $('.layerFour').show();
	}, 5000);

	setTimeout(function() {
	    $('.layerFour').hide();
	}, 12300); // <-- time in milliseconds

	//*****layerFive************

	setTimeout(function() {
	    $('.layerFive').show();
	}, 12300);


//***********Effects********************

	//**********layerTwo Effect*********
	setTimeout(function() {
	    $('#img-1').show();
	}, 2000);

	setTimeout(function() {
	    $('#img-2').show();
	}, 2150);

	setTimeout(function() {
	    $('#img-3').show();
	}, 2300);

	setTimeout(function() {
	    $('#img-4').show();
	}, 2450);

	setTimeout(function() {
	    $('#img-5').show();
	}, 2600);

	setTimeout(function() {
	    $('#img-6').show();
	}, 2750);

	setTimeout(function() {
	    $('#img-7').show();
	}, 2900);

	setTimeout(function() {
	    $('#img-8').show();
	}, 3050);

	setTimeout(function() {
	    $('#img-9').show();
	}, 3200);
	//**********End layerTwo Effect*********

	//**********layerThree Effect*********

	setTimeout(function() {
	    $('#imgB1').show();
	}, 4400);

	setTimeout(function() {
	    $('#imgB2').show();
	}, 4700);

	setTimeout(function() {
	    $('#imgB3').show();
	}, 4400);

	setTimeout(function() {
	    $('#imgB4').show();
	}, 4550);

	setTimeout(function() {
	    $('#imgB5').show();
	}, 4350);

	setTimeout(function() {
	    $('#imgB6').show();
	}, 4550);

	setTimeout(function() {
	    $('#imgB7').show();
	}, 4200);

	setTimeout(function() {
	    $('#imgB8').show();
	}, 4500);

	setTimeout(function() {
	    $('#imgB9').show();
	}, 4250);

	//**********End layerThree Effect*********


	//***********layerFour***********

// REFACTORING ******************
// started the refactoring, only done to first box. problem is that in the function called effectA it refers to Box 1 not to the others that have the same effect.
// function effectA() { 
//   $('#box-one > div:first').fadeOut(100).next().slideDown(500).end().appendTo('#box-one');
// }

function slideShow(box){
	$("box > div:gt(0)").hide();
	setInterval(function() { 
	  $('box > div:first')
	    .fadeOut(100)
	    .next()
	    .slideDown(500)
	    .end()
	    .appendTo('box');
	},  2000);	//time control between slides
}
			



// REFACTORING ******************

		// Effect A***********

		setTimeout(function(){
			slideShow($("#box-one"));
		},5000);
		
	
		setTimeout(function(){
			$("#box-three > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-three > div:first')
			    .fadeOut(100)
			    .next()
			    .slideDown(500)
			    .end()
			    .appendTo('#box-three');
			},  2150);	//time control between slides
		},5000);
		
		setTimeout(function(){
			$("#box-five > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-five > div:first')
			    .fadeOut(100)
			    .next()
			    .slideDown(500)
			    .end()
			    .appendTo('#box-five');

			},  2300);	//time control between slides
		},5000);

		setTimeout(function(){
			$("#box-seven > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-seven > div:first')
			    .fadeOut(100)
			    .next()
			    .slideDown(500)
			    .end()
			    .appendTo('#box-seven');

			},  2450);	//time control between slides
		},5000);

		setTimeout(function(){
			$("#box-nine > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-nine > div:first')
			    .fadeOut(100)
			    .next()
			    .slideDown(500)
			    .end()
			    .appendTo('#box-nine');

			},  2600);	//time control between slides
		},4900);


		// Effect B ****************

		setTimeout(function(){
			$("#box-two > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-two > div:first')
			    .fadeOut(500)
			    .next()
			    .fadeIn(500)
			    .end()
			    .appendTo('#box-two');
			},  2400);	//time control between slides
		}, 4900);
		
		setTimeout(function(){
			$("#box-four > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-four > div:first')
			    .fadeOut(500)
			    .next()
			    .fadeIn(500)
			    .end()
			    .appendTo('#box-four');
			},  2200);	//time control between slides
		}, 4900);

		setTimeout(function(){
			$("#box-six > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-six > div:first')
			    .fadeOut(500)
			    .next()
			    .fadeIn(500)
			    .end()
			    .appendTo('#box-six');
			},  2600);	//time control between slides
		}, 4900);

		setTimeout(function(){
			$("#box-eight > div:gt(0)").hide();
			setInterval(function() { 
			  $('#box-eight > div:first')
			    .fadeOut(500)
			    .next()
			    .fadeIn(500)
			    .end()
			    .appendTo('#box-eight');
			},  2800);	//time control between slides
		}, 4900);

		//**********End layerFour Effect*********

		//**********layerFive Effect*********
	setTimeout(function() {
	    $('#jump1').fadeIn(800);
	}, 12300);

	setTimeout(function() {
	    $('#jump2').fadeIn(800);
	}, 12300);

	setTimeout(function() {
	    $('#jump3').fadeIn(800);
	}, 12300);

	setTimeout(function() {
	    $('#jump4').show();
	}, 13000);

	setTimeout(function() {
	    $('#jump5').show();
	}, 13000);

	setTimeout(function() {
	    $('#jump6').show();
	}, 13000);

	setTimeout(function() {
	    $('#jump7').show();
	}, 13700);

	setTimeout(function() {
	    $('#jump8').show();
	}, 13700);

	setTimeout(function() {
	    $('#jump9').show();
	}, 13700);

		//**********Footer Effect*********
		setTimeout(function() {
	    $('#contact').fadeIn(800);
	}, 14000);

	//**********End layerFive Effect*********

	