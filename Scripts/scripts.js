(function($) {
	$(document).ready(function() {
		"use strict";
		
		
		// HAMBURGER
		$('.hamburger-menu').on('click', function(e) {
			$(this).toggleClass('open');
			$('.side-menu').toggleClass('side-menu-open');
			$('main').toggleClass('side-menu-open');
		});
		
		

		// SEARCH 
		$('.search-icon').on('click', function(e) {
			$('.search-box').addClass('open');
			$('main').addClass('search-box-open');
		});

		$('.search-close').on('click', function(e) {
			$('.search-box').removeClass('open');
			$('main').removeClass('search-box-open');
		});
		

	});
	
})(jQuery);
