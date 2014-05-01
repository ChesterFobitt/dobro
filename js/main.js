$(function() {
	headerFix = $('.b-header')
	$(window).scroll(function() {
		if(
			$(this).scrollTop() > 1) {
				headerFix.addClass('fixed-header')
			 } 
		else {
				headerFix.removeClass('fixed-header')
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
