$(function() {


	/****************************************************/
	/****************     PAGE   BOOK *******************/
	/****************************************************/

	if ($('.index').length){
		$('.index .home-wrap .blocks .block-1').mouseover(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-1').css('opacity', '1');
			$('.index .home-wrap .index-title').css('opacity','0');
			$('.index .home-wrap .title-1').css('opacity','1');
		});
		$('.index .home-wrap .blocks .block-2').mouseover(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-2').css('opacity', '1');
		});
		$('.index .home-wrap .blocks .block-3').mouseover(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-3').css('opacity', '1');
		});
		$('.index .home-wrap .blocks .block-4').mouseover(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-4').css('opacity', '1');
		});
		$('.index .home-wrap .blocks .block-5').mouseover(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-5').css('opacity', '1');
		});

		$('.index .home-wrap .blocks .block').mouseleave(function(){
			$('.index .bg-wrap .bg').css('opacity','0');
			$('.index .bg-wrap .bg-0').css('opacity', '1');
			$('.index .home-wrap .index-title').css('opacity','0');
		    $('.index .home-wrap .title-0').css('opacity','1');
		});
	}










	/****************************************************/
	/****************     PAGE   BOOK *******************/
	/****************************************************/

	if ($('.book-page').length){

		//pagepiling settings
		$('#pagepiling').pagepiling({
			menu: '#menu',
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
			direction: 'horizontal',
			navigation: false,
		});

		//when loaded first image of filter opacity: 1
		$('#pagepiling .section.slider.active .book-img-wrap:nth-child(1)').css('opacity','1');

		//loaded right-bar is visible
		if($('#pagepiling .section.slider').hasClass('active')){
				$('.right-bar-wrap').css('opacity', '1');
			}else{
				$('.right-bar-wrap').css('opacity', '0');
			}

		//visible or hidden elements when scrolling
		$(window).bind('mousewheel', function() {
			$('.book-wrap #pagepiling .book-img-wrap').css('opacity','0');
			$('.book-wrap #pagepiling .active').children('.book-img-wrap').css('opacity','1');
			if($('#pagepiling .section.slider').hasClass('active')){
				$('.right-bar-wrap').css('opacity', '1');
			}else{
				$('.right-bar-wrap').css('opacity', '0');
			}
		});

		//visible or hidden elements when clicking
		$('.book-wrap ul li').click( function(){
			setTimeout(function(){
	  			$('.book-wrap #pagepiling .book-img-wrap').css('opacity','0');
				$('.book-wrap #pagepiling .active').children('.book-img-wrap').css('opacity','1');

				if($('#pagepiling .section.slider').hasClass('active')){
					$('.right-bar-wrap').css('opacity', '1');
				}else{
					$('.right-bar-wrap').css('opacity', '0');
				}

			}, 500);
		});


		//removing slick and pagepiling classes
		$('.section .pp-tableCell .book-img-wrap').unwrap();
		$('.section.slider').removeClass('pp-table')


		//slick settings right-bar filter 1 
		$('.first-book-1').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  asNavFor: '.first-book-nav-1'
			});
			$('.first-book-nav-1').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  asNavFor: '.first-book-1',
			  centerMode: true,
			  fade: true,
			  focusOnSelect: true,
			  nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
	        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
		});

		//slick settings right-bar filter 2
		$('.first-book-2').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  asNavFor: '.first-book-nav-2'
			});
			$('.first-book-nav-2').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  asNavFor: '.first-book-2',
			  centerMode: true,
			  fade: true,
			  focusOnSelect: true,
			  nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
	        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
		});


		//right-bar clicking hidden other imgs of filter
		$('.book-wrap .first-book-nav-1-wrap').click(function(){
			$('.book-inner .first-book').css('opacity','0');
			$('.book-inner .first-book-1').css('opacity', '1');
		});
		$('.book-wrap .first-book-nav-2-wrap').click(function(){
			$('.book-inner .first-book').css('opacity','0');
			$('.book-inner .first-book-2').css('opacity', '1');
		});

		
    }
});

$(window).load(function(){
	if ($('.book-page').length){
		if($('#pagepiling .section').hasClass('active')){
			$('#pagepiling .section').children('.book-img-wrap').css('opacity','1');
		}
	}
});