$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	$('.download').waypoint(function() {
		$('.download .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});

	// Fancybox
	$('.fancy-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});


//Matt's custom folio displays

//opening
$(".work-box").click(function(){
	var displayID = "#" + $(this).attr('id') + "-display";

	$(displayID).show('fast');
	$(".sampleBlock-footer").show('slow');
});

//closing display caption
$(".hide-caption").click(function(){
	$(".sampleBlock-footer").hide('fast');
});

//closing display
function onHideRemoveiFrameSrc() {
	$(".sampleBlock iframe").attr('src',"");
}

$(".fancybox-close").click(function(){
	$(".sampleBlock").hide('fast',onHideRemoveiFrameSrc);
});
$(document).mouseup(function(e)
{
    var container = $(".sampleBlock");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide('fast', onHideRemoveiFrameSrc);
    }
});
$(window).keyup(function(event) {
    if(event.which === 27) {
        $('.sampleBlock').hide('fast',onHideRemoveiFrameSrc);
    }
});

//special set-up for folio4 to support iframe video not starting on page load.
$("#folio1").click(function(){
	$("#folio1-display iframe").attr('src',"https://www.youtube.com/embed/efmbRtpkjr0");
});
$("#folio2").click(function(){
	$("#folio2-display iframe").attr('src',"https://www.youtube.com/embed/zQB-TGrnA-s");
});
$("#folio3").click(function(){
	$("#folio3-display iframe").attr('src',"https://www.youtube.com/embed/5UkSdcYVbbo");
});
$("#folio4").click(function(){
	$("#folio4-display iframe").attr('src',"https://dcms.datacreative.com.au/ymca/interactive/2019/iframe");
});
$("#folio5").click(function(){
	$("#folio5-display iframe").attr('src',"https://www.youtube.com/embed/0Mdg4yOkwcA");
});
$("#folio6").click(function(){
	$("#folio6-display iframe").attr('src',"https://www.youtube.com/embed/JyTKyKdz4oE");
});
$("#folio7").click(function(){
	$("#folio7-display iframe").attr('src',"https://www.youtube.com/embed/n2icSEuDK9Q");
});
