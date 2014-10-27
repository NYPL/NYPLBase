$(document).ready(function () {
	
	
	// show/hide nav 
	$( ".menu__button" ).click(function() {
	  $( ".styleguide__subnav" ).toggleClass( "nav--show" );
	});
	
	// hide nav after clicking link
	$(".styleguide__subnav a").click(function() {
		$( ".styleguide__subnav" ).removeClass( "nav--show" ); 
	});

	// hide nav when you click anywhere off of it
	$(".content--guide").click(function(e) {
	    e.stopPropagation();
	    $( ".styleguide__subnav" ).removeClass( "nav--show" ); 
	});

	// smooth scrolling to anchors; original code from: https://gist.github.com/austinpray/5994652
	function smoothScroll(el, to, duration) {
	    if (duration < 0) {
	        return;
	    }
	    var difference = to - $(window).scrollTop();
	    var perTick = difference / duration * 10;
	    this.scrollToTimerCache = setTimeout(function() {
	        if (!isNaN(parseInt(perTick, 10))) {
	            window.scrollTo(0, $(window).scrollTop() + perTick);
	            smoothScroll(el, to, duration - 10);
	        }
	    }.bind(this), 10);
	}
	$('.styleguide__subnav a, .backtotop').on('click', function(e) {
	    e.preventDefault();
	    smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
	});

    // add bg color to selected nav item
	$('.styleguide__subnav a').on('click', function(e) {
	    if ($(".styleguide__subnav a").hasClass("current")) {
		$(".styleguide__subnav a").removeClass("current");  
		  }
	    $(this).addClass("current");
	    });

/* -end- */
 });