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

		$("#flipbook").turn({
		width: 400,
		height: 290,
		autoCenter: true,
		turnCorners: "bl,br",
		display: 'double',
		elevation: 100,
		acceleration: true
	});
});

