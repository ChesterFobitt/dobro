$(function() {
	$(window).scroll(function() {
		if(
			$(this).scrollTop() > 1) {
			//$('.header-scroll-top').fadeIn(100);
			$('.i-header').css({'position' : 'fixed', 'top':'0', 'height':'52px', '':''});
			$('.e-logo').css({'marginTop' : '5px'});
			$('.e-logo a img').css({'width' : '186px'});
			$('.b-menu-horiz').css({'marginTop':'12px'})
			//$('.left-list-menu').css({'position' : 'fixed', 'marginTop':'-110px', 'z-index': '777', 'width' : '223px'});
			$('.b-info').fadeOut(2);

			 } 
		else {
			//$('.header-scroll-top').fadeOut(100);
			$('.i-header').css({'position' : 'relative', 'marginTop':'0', 'height':'90px'});
			$('.e-logo').css({'marginTop' : '16px'});
			$('.e-logo a img').css({'width' : '253px'});
			$('.b-menu-horiz').css({'marginTop':'0'})
			//$('.left-list-menu').css({'position' : 'relative', 'marginTop':'5px'});
			//$('.right-lang-block-scroll').css({'display' : 'none'});
			$('.b-info').fadeIn(2);

		}
	});
});
