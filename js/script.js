$(document).ready(function(){

	var vpw = $(window).width(), 
		vph = $(window).height();

	// modal
	$('#openmodal').click(function(){
		$('#overlay').removeClass('hide').addClass('dispblock');
		$('#modal').removeClass('hide').addClass('dispblock');
		$('#modal').css({'top': vph/2 - $('#modal').height()/2 + 'px'});
	});

	$('#close').click(function(){
		$('#overlay').removeClass('dispblock').addClass('hide');
		$('#modal').removeClass('dispblock').addClass('hide');
	});

	// resizing nav bar height on scroll
    $(document).on("scroll", function(){
	    if($(document).scrollTop() > 125){
	        $("header").removeClass("large").addClass("small");
	    }
	    else {
	        $("header").removeClass("small").addClass("large");
	    }
	});

	// smooth scrolling to sections
	$(function(){
	  $('nav a').click(function(){
	      var target = $(this.hash);
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 100
	        }, 1000);
	        return false;
	      }
	  });
	});

    // postion indicator
    $(document).on("scroll",function(){
	    if($(document).scrollTop() < $('#about').position().top - 200){
		    $('#nav-about').removeClass('active');
		    $('#nav-team').removeClass('active');
		    $('#nav-contact').removeClass('active');
		    $('#nav-home').addClass('active');
	    }
	    else if($(document).scrollTop() < $('#team').position().top - 200){
	    	$('#nav-home').removeClass('active');
		    $('#nav-team').removeClass('active');
		    $('#nav-contact').removeClass('active');
		    $('#nav-about').addClass('active');
	    }
	    else if($(document).scrollTop() < $('#contact').position().top - 200){
	    	$('#nav-home').removeClass('active');
		    $('#nav-about').removeClass('active');
		    $('#nav-contact').removeClass('active');
		    $('#nav-team').addClass('active');
	    }
	    else if($(document).scrollTop() > $('#contact').position().top - 800){
	    	$('#nav-home').removeClass('active');
		    $('#nav-about').removeClass('active');
		    $('#nav-team').removeClass('active');
		    $('#nav-contact').addClass('active');
	    }
	});

	// carousel
	$(function() {

		$('#slideshow').css({'width': vpw + 'px'});
		$('#slideshow-reel .slide').css({'width': vpw + 'px'});
		$('#slideshow-reel').css({'width': vpw * 5 + 'px'});

	    var currSlide = 0,
		    $slideshow = $('#slideshow'),
		    $slideReel = $slideshow.find('#slideshow-reel'),
		    maxSlide = $slideReel.children().length - 1;

	    function changeSlide(newSlide) {
	        currSlide = newSlide;

	        if (currSlide > maxSlide) currSlide = 0;
	        else if (currSlide < 0) currSlide = maxSlide;

	        $slideReel.animate({
	            left : currSlide * -1 * vpw
	        }, 500, 'swing');
	    }
	    
	    $('#slideshow-prev').click(function(event) {
	    	event.preventDefault();
	        changeSlide(currSlide - 1);
	    });

	    $('#slideshow-next').click(function(event) {
	    	event.preventDefault();
	        changeSlide(currSlide + 1);
	    });
	    
	});

});