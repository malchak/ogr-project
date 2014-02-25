$(document).ready(function(){
	$('li > a' ).click(function(){
		var aTagId = $(this).attr("id");
		var target = $("a[name='"+ aTagId +"']");
		
		$('li').removeClass();
		$(this).parent().addClass('active');
		$('html,body').animate({scrollTop: target.offset().top},'slow');
	});

});

// function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }

// scrollToAnchor('id3');