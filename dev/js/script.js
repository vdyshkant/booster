
// typed.js
function typed () {
	if ($(".typed").length) {
		$(".typed").typed({
	        stringsElement: $('.typed-strings'),
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	        callback: function () { null; },
	        resetCallback: function () { newTyped(); }
	    });
    };
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
	(function ($) {
		typed();
	})(jQuery);
});
// EOF typed.js

// Create a new instance of Headhesive
// Options
var options = {
  offset: 1
}

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.top-nav', options);


// EOF headsive.js

// burger animation itself
//
// var toggled = 0;
//
// $('.burger-menu').click(function(){
//   if(toggled == 0){
//   $('.burg3').stop().transition({rotate: "45", "margin-top": "13px"});
//   $('.burg2').stop().transition({opacity: "0"}, "fast");
//   $('.burg1').stop().transition({rotate: "-45", "margin-top": "13px"});
//     toggled++;
//   }
//   else{
//   $('.burg3').stop().transition({rotate: "+=135", "margin-top": "8px"});
//   $('.burg2').transition({opacity: "1"}, "fast");
//   $('.burg1').stop().transition({rotate: "-=135", "margin-top": "18px"});
//   toggled--;
//   }
// });

$("a.burger").click(function(){
  $(this).toggleClass("selected");
});
// EOF  burger animation itself




// burger behave



// добавляем класс с анимацией по клику на бургер, а сами стили выносим из js into css
// одновременно по клику на бургер вешаем классы на всплывающее меню
// при отбратном клике по бургеру всё предыдущее отменяется.
// opacity для nav блока меняем динамически и display none на block

var open = false;
jQuery('a.burger').on('click', function() {
		// jQuery(this).find(".burger-menu").toggleClass("main-nav-bar-active");
		if (open == false) {
				jQuery('.main-nav-bar').fadeIn(300);
				open = true;
		} else {
				jQuery('.main-nav-bar').fadeOut(300);
				open = false;
		}
		stag_wpml_widget_position();
});
// EOF burger behave



/// Parallax

// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);

// eof  Parallax

/* headhesive alternative: */
// jQuery(window).scroll(function() {
// 			var value = jQuery(this).scrollTop();
// 			if (value > 150) {
// 					jQuery("#header").removeClass("initial-state").addClass("scrolled-header").css({
// 							"padding-top": 60 + "px",
// 							"padding-bottom": 60 + "px"
// 					});
// 			} else {
// 	        jQuery("#header").removeClass("scrolled-header").addClass("initial-state").css({
// 						"padding-top": 25 + "px",
// 						"padding-bottom": 25 + "px"
// 					});
// 			}
// 	})

// var stag_styles = {
//  "stag_header_bg": "#ffffff",
//  "stag_header_scroll_bg": "rgba(255,255,255,0.9)",
//  "stag_default_color": "#ffffff",
//  "stag_logo_width": "85",
//  "stag_logo_height": "25",
//  "stag_logo_onscroll_height": "25",
//  "stag_init_pt": "48",
//  "stag_init_pb": "48",
//  "stag_scroll_pt": "16",
//  "stag_scroll_pb": "16",
//  "stag_scrolling_effect": "1",
//  "stag_mainlogosrc": "",
//  "stag_alternativelogosrc": "",
//  "stag_alternativelogo": "0",
//  "stag_scheme": "light-header",
//  "stag_scheme_on_scroll": "light-header",
//  "stag_pagenav_behavior_switch": "0",
//  "stag_initial_navigation_style": "light-header",
//  "stag_onscroll_navigation_style": "light-header",
//  "stag_initial_header_color": "255,255,255",
//  "stag_onscroll_header_color": "255,255,255",
//  "stag_initial_header_color_opacity": "0",
//  "stag_onscroll_header_color_opacity": "0",
//  "stag_initial_logo_image_url": null,
//  "stag_initial_logo_image_width": null,
//  "stag_initial_logo_image_height": null,
//  "stag_onscroll_logo_image_url": null,
//  "stag_onscroll_logo_image_width": null,
//  "stag_onscroll_logo_image_height": null,
//  "page_id": "2809"
// }
//
// ;
