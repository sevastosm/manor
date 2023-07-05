$(document).ready(function(){

    // opening and closing sandwich menu
	$('.header__open').on('click touch', function(){
		$('.header__nav').addClass('active');
	}); 

    $('.header__close').on('click touch', function(){
        $('.header__nav').removeClass('active');
    }); 

});	
