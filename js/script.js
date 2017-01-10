$(document).ready(function() {
	
    var header_size = $('header').height();
    
   
 $('.menu_btn').on('click', function(e) {
 		e.stopPropagation();
 		e.preventDefault();
        $('.nav_bar').toggleClass('nav_bar_expand');
    });
 $(document).click(function(){
 		$('.nav_bar').removeClass('nav_bar_expand');
 });


    $('.nav_links').on('click', function(e) {
        e.preventDefault();
        var section_id = "#" + $(this).data("jumpto");
        $('html, body').animate({
            scrollTop: $(section_id).offset().top - header_size
        }, 'slow');
    });
    $('div.panorama').paver();

});
