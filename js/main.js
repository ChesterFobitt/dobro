$(function() {
			var h = $('.i-header'),
				l = $('.e-logo'),
				m = $('.b-menu-horiz'),
				i = $('.b-info'),
				im = $('.e-logo a img');
	$(window).scroll(function() {
		if(
			$(this).scrollTop() > 1) {
				h.css({'position' : 'fixed', 'top':'0', 'height':'52px', '':''});
				l.css({'marginTop' : '5px'});
				im.css({'width' : '186px'});
				m.css({'marginTop':'12px'});
				i.fadeOut(2);
			 } 
		else {
			h.css({'position' : 'relative', 'marginTop':'0', 'height':'90px'});
			l.css({'marginTop' : '16px'});
			im.css({'width' : '253px'});
			m.css({'marginTop':'0'})
			i.fadeIn(2);

		}
	});
});

$(window).scroll(function() {
	var leftBarFix = $('#leftBarFix');
		if(
			$(this).scrollTop() > 570) {
				leftBarFix.addClass('b-type-left-fix');	
			 } 
		else {
				leftBarFix.removeClass('b-type-left-fix');	

		}
	});
