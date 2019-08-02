$(document).ready(function() {

	//... Change color of navbar tab on clicking ...
	$('.nav-item').click(function() {
		$(this).siblings().removeClass('active-tab');
		$(this).addClass('active-tab');
	});

	$("input[type=range]").mousemove(function (e) {
	    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
	    var percent = val * 100;

	    $(this).css('background-image',
	        '-webkit-gradient(linear, left top, right top, ' +
	        'color-stop(' + percent + '%, #8886c3), ' +
	        'color-stop(' + percent + '%, #e8e8e8)' +
	        ')');

	    $(this).css('background-image',
	        '-moz-linear-gradient(left center, #8886c3 0%, #8886c3 ' + percent + '%, #e8e8e8 ' + percent + '%, #e8e8e8 100%)');
	});


	$('#_mobile-menu').click(function() {
		if($(this).parent().children('ul').is(':visible')) {
			$(this).parent().children('ul').fadeOut();
		}else {
			$(this).parent().children('ul').fadeIn();

			$('.nav-item').click(function() {
				$(this).parent('ul').fadeOut();
			});
		}
	});

});