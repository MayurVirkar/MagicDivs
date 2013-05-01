//top slider
$(function() {
	var options = 
	$('#carouselTop').carouFredSel({
		items: 1,
		auto: false,
		prev: '#prevTop',
		next: '#nextTop',
		scroll: {
			fx: 'slideIn'
		}
	});
});

//box1 slider
$(function() {
	var thumbs = $('#thumbscarousel');
	var options = 
	$('#carousel').carouFredSel({
		items: 1,
		auto: false,
		prev: '#prev',
		next: '#next',
		scroll: {
			fx: 'slideIn'
		},

		pagination: {
			container: '#pager',
			duration: 300
		}
	});

	thumbs.carouFredSel({
		circular: false,
		auto: false,
		items: 1
	});

	$('#pager').hover(function() {
		var current = $('#carousel').triggerHandler( 'currentPosition' );
		thumbs.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
		$('#thumbs').stop().fadeTo(300, 1);
	}, function() {
		$('#thumbs').stop().fadeTo(300, 0);
	});

	$('#pager a').mouseenter(function() {
		var index = $('#pager a').index( $(this) );
		if ( thumbs.triggerHandler( 'isScrolling' ) ) {
			thumbs.trigger( 'onAfter', [[function() {
				thumbs.trigger( 'slideTo', index );
			}]]);
		} else {
			thumbs.trigger( 'slideTo', index );
		}
	});

	$('#carousel').on('mouseenter', function() {
		$('#prev, #next').css('opacity', '0.2');
		 
		 	$('#carousel').on('mouseout', function() {
		 		$('#prev, #next').css('opacity', '0');

		 	
		});
	});
});

//box2 slider
$(function() {
	var thumbs1 = $('#thumbscarousel1');
	var options = 
	$('#carousel1').carouFredSel({
		items: 1,
		auto: false,
		prev: '#prev1',
		next: '#next1',
		scroll: {
			fx: 'slideIn'
		},

		pagination: {
			container: '#pager1',
			duration: 300
		}
	});

	thumbs1.carouFredSel({
		circular: false,
		auto: false,
		items: 1
	});

	$('#pager1').hover(function() {
		var current = $('#carousel1').triggerHandler( 'currentPosition' );
		thumbs1.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
		$('#thumbs1').stop().fadeTo(300, 1);
	}, function() {
		$('#thumbs1').stop().fadeTo(300, 0);
	});

	$('#pager1 a').mouseenter(function() {
		var index = $('#pager1 a').index( $(this) );
		if ( thumbs1.triggerHandler( 'isScrolling' ) ) {
			thumbs1.trigger( 'onAfter', [[function() {
				thumbs1.trigger( 'slideTo', index );
			}]]);
		} else {
			thumbs1.trigger( 'slideTo', index );
		}
	});

	$('#carousel1').on('mouseenter', function() {
		$('#prev1, #next1').css('opacity', '0.2');
		 
		 	$('#carousel1').on('mouseout', function() {
		 		$('#prev1, #next1').css('opacity', '0');

		 	
		});
	});
	
});

//box3 slider 
$(function() {
	var thumbs2 = $('#thumbscarousel2');
	var options = 
	$('#carousel2').carouFredSel({
		items: 1,
		auto: false,
		prev: '#prev2',
		next: '#next2',
		scroll: {
			fx: 'slideIn'
		},

		pagination: {
			container: '#pager2',
			duration: 300
		}
	});

	thumbs2.carouFredSel({
		circular: false,
		auto: false,
		items: 1
	});

	$('#pager2').hover(function() {
		var current = $('#carousel2').triggerHandler( 'currentPosition' );
		thumbs2.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
		$('#thumbs2').stop().fadeTo(300, 1);
	}, function() {
		$('#thumbs2').stop().fadeTo(300, 0);
	});

	$('#pager2 a').mouseenter(function() {
		var index = $('#pager2 a').index( $(this) );
		if ( thumbs2.triggerHandler( 'isScrolling' ) ) {
			thumbs2.trigger( 'onAfter', [[function() {
				thumbs2.trigger( 'slideTo', index );
			}]]);
		} else {
			thumbs2.trigger( 'slideTo', index );
		}
	});

	$('#carousel2').on('mouseenter', function() {
		$('#prev2, #next2').css('opacity', '0.2');
		 
		 	$('#carousel2').on('mouseout', function() {
		 		$('#prev2, #next2').css('opacity', '0');

		 	
		});
	});
	
});

// //box4 slider
// $(function() {
// 	var thumbs3 = $('#thumbscarousel3');
// 	var options = 
// 	$('#carousel3').carouFredSel({
// 		items: 1,
// 		auto: false,
// 		prev: '#prev3',
// 		next: '#next3',
// 		scroll: {
// 			fx: 'slideIn'
// 		},

// 		pagination: {
// 			container: '#pager3',
// 			duration: 300
// 		}
// 	});

// 	thumbs3.carouFredSel({
// 		circular: false,
// 		auto: false,
// 		items: 1
// 	});

// 	$('#pager3').hover(function() {
// 		var current = $('#carousel3').triggerHandler( 'currentPosition' );
// 		thumbs3.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
// 		$('#thumbs3').stop().fadeTo(300, 1);
// 	}, function() {
// 		$('#thumbs3').stop().fadeTo(300, 0);
// 	});

// 	$('#pager3 a').mouseenter(function() {
// 		var index = $('#pager3 a').index( $(this) );
// 		if ( thumbs3.triggerHandler( 'isScrolling' ) ) {
// 			thumbs3.trigger( 'onAfter', [[function() {
// 				thumbs3.trigger( 'slideTo', index );
// 			}]]);
// 		} else {
// 			thumbs3.trigger( 'slideTo', index );
// 		}
// 	});

// 	$('#carousel3').on('mouseenter', function() {
// 		$('#prev3, #next3').css('opacity', '0.2');
		 
// 		 	$('#carousel3').on('mouseout', function() {
// 		 		$('#prev3, #next3').css('opacity', '0');

		 	
// 		});
// 	});
	
// });

//box5 slider 
$(function() {
	var thumbs4 = $('#thumbscarousel4');
	var options = 
	$('#carousel4').carouFredSel({
		items: 1,
		auto: false,
		prev: '#prev4',
		next: '#next4',
		scroll: {
			fx: 'slideIn'
		},

		pagination: {
			container: '#pager4',
			duration: 300
		}
	});

	thumbs4.carouFredSel({
		circular: false,
		auto: false,
		items: 1
	});

	$('#pager4').hover(function() {
		var current = $('#carousel4').triggerHandler( 'currentPosition' );
		thumbs4.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
		$('#thumbs4').stop().fadeTo(300, 1);
	}, function() {
		$('#thumbs4').stop().fadeTo(300, 0);
	});

	$('#pager4 a').mouseenter(function() {
		var index = $('#pager4 a').index( $(this) );
		if ( thumbs4.triggerHandler( 'isScrolling' ) ) {
			thumbs4.trigger( 'onAfter', [[function() {
				thumbs4.trigger( 'slideTo', index );
			}]]);
		} else {
			thumbs4.trigger( 'slideTo', index );
		}
	});

	$('#carousel4').on('mouseenter', function() {
		$('#prev4, #next4').css('opacity', '0.2');
		 
		 	$('#carousel4').on('mouseout', function() {
		 		$('#prev4, #next4').css('opacity', '0');

		 	
		});
	});
	
});

//box6 slider
$(function() {
 	var thumbs5 = $('#thumbscarousel5');
 	var options = 
 	$('#carousel5').carouFredSel({
 		items: 1,
 		auto: false,
 		prev: '#prev5',
 		next: '#next5',
 		scroll: {
 			fx: 'slideIn'
 		},

 		pagination: {
 			container: '#pager5',
 			duration: 300
 		}
 	});

 	thumbs5.carouFredSel({
 		circular: false,
 		auto: false,
 		items: 1
 	});

 	$('#pager5').hover(function() {
 		var current = $('#carousel5').triggerHandler( 'currentPosition' );
 		thumbs5.trigger( 'slideTo', [ current, 0, true, { fx: 'none' } ] );
 		$('#thumbs5').stop().fadeTo(300, 1);
 	}, function() {
 		$('#thumbs5').stop().fadeTo(300, 0);
 	});

 	$('#pager5 a').mouseenter(function() {
 		var index = $('#pager5 a').index( $(this) );
 		if ( thumbs5.triggerHandler( 'isScrolling' ) ) {
 			thumbs5.trigger( 'onAfter', [[function() {
 				thumbs5.trigger( 'slideTo', index );
 			}]]);
 		} else {
 			thumbs5.trigger( 'slideTo', index );
 		}
 	});

 	$('#carousel5').on('mouseenter', function() {
 		$('#prev5, #next5').css('opacity', '0.2');
		 
 		 	$('#carousel5').on('mouseout', function() {
 		 		$('#prev5, #next5').css('opacity', '0');

		 	
 		});
 	});
	
 });			
