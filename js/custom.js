$(document).ready(function() {

	// Плагін для скролу секцій
	$('#pagepiling').pagepiling({
		verticalCentered: false,
		scrollingSpeed: 200,
		navigation: false,
		onLeave: function(index, nextIndex, direction) {
			if(index === 1 && nextIndex === 2) {
				secondSectionAnimate();
			}
			else if(index === 2 && nextIndex === 3) {
				thirdSectionAnimate();
			}
			else if(index === 3 && nextIndex === 4) {
				fourthSectionAnimate();
			}
		}
	});

	function firstSectionAnimate() {
		TweenLite.to($('.stories .jumbotron'), 1, {
			opacity: 1,
			top: '50%'
		});
		TweenLite.to($('.stories .navbar'), 1, {opacity: 1});
		TweenLite.to($('.stories .social'), 1, {opacity: 1});
	}

	function secondSectionAnimate() {
		TweenLite.to($('.work .wrap'), 0.8, {
			opacity: 1,
			delay: 1,
			onComplete: function() {
				TweenLite.to($('.work .wrap'), 0.5, {top: 0});
				TweenLite.to($('.work .desc-wrap'), 0.5, {opacity: 1});
			}
		});
	}

	function thirdSectionAnimate() {
		TweenLite.to($('.who .jumbotron'), 1, {
			opacity: 1,
			top: '50%',
			delay: 0.5
		});
		TweenLite.to($('.who .navbar'), 1, {
			opacity: 1,
			delay: 0.5
		});
	}

	function fourthSectionAnimate() {
		TweenLite.to($('.left-wrap'), 0.5, {
			opacity: 1,
			delay: 0.5,
			onComplete: function() {
				var timeLine = new TimelineMax({
					onComplete: function() {
						TweenLite.to($('.right-wrap'), 0.5, {opacity: 1});
						TweenLite.to($('.navbar-contact li a'), 0.5, {color: '#fff'});
					}
				});
				timeLine.add('label', 0.1)
						.to($('.left'), 0.6, {width: '50%'}, 'label')
						.to($('.right'), 0.6, {left: '50%'}, 'label');
			}
		});
	}

	// Таймлайн псевдолоадера
	TweenLite.to($('.load-logo'), 1.2, {
		opacity: 1,
		delay: 1,
		onComplete: function() {
			var c = $('.load-circle');
			TweenLite.to(c, 1, {opacity: 1});

			var loadTimeline = new TimelineMax({
				repeat: Math.floor(Math.random() * (2 - 1)) + 1, // Випадкова к-сть повторень (від 1 до 5)
				onComplete: function() {
					TweenLite.to($('.load-wrap'), 0.8, {
						opacity: 0,
						onComplete: function() {
							TweenLite.to($('.load'), 0.4, {
								opacity: 0,
								onComplete: function() {
									firstSectionAnimate();
									$('.load').hide();
								}
							});
						}
					});
				}
			});

			loadTimeline.to(c, 0.4, {left: 40, backgroundColor: '#fcb957', ease: Power0.easeNone})
						.to(c, 0.4, {left: '+=150', backgroundColor: '#f16682', ease: Power0.easeNone})
						.to(c, 0.4, {left: '-=150', backgroundColor: '#00babe', ease: Power0.easeNone})
						.to(c, 0.4, {left: -150, backgroundColor: '#fcb957', ease: Power0.easeNone});

		}
	});

	$('.button.submit').click(function() {
		$(this).addClass('accept');
	})

});