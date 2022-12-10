
$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill_2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})


/* Реализация открытия и закрытия меню бургера*/
$(document).ready(function () {
	$('.header_burger').click(function(event) {
		$('.header_burger, .header_menu').toggleClass('active');
		$('body').toggleClass('lock'); /* Запрет скрола при открытом меню*/
	});
})















