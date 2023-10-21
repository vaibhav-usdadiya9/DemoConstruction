jQuery(document).ready(function(){

    "use strict";
    /* ================ Revolution Slider. ================ */
    if ($('.tp-banner').length > 0) {
        $('.tp-banner').show().revolution({
            delay: 6000,
            startheight:700,
            startwidth: 1140,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullWidth: 'on'
        });
    }
    if ($('.tp-banner-full').length > 0) {
        $('.tp-banner-full').show().revolution({
            delay: 6000,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullScreen: 'on'
        });
    }
 
   	/*** About img ***/
	
	function maleeha_about_img(){
		
		var name		= jQuery('.maleeha_about .about_main p .name');
		var image		= jQuery('.maleeha_about .about_image');
		
		name.on('mouseenter',function(){
			image.addClass('opened');
		})
		.on('mouseleave',function(){
			image.removeClass('opened');
		});
		
	}
	maleeha_about_img();
	/*** Images ***/
	
	function maleeha_images(){
		
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element		= jQuery(this);
		var url			= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}
maleeha_images();  


/*** Hero Height ***/
	
	function maleeha_hero_height(){
		
	var WH		= jQuery(window).height();
	var hero	= jQuery('.maleeha_hero_wrap');
		
	hero.css({height:WH});
}
maleeha_hero_height();	
	
	/*** About Top ***/
	
	function maleeha_about_top(){
		
	var hero	= jQuery('.maleeha_hero_wrap').height();
	var about	= jQuery('#about');
		
	about.css({marginTop:hero});
}
maleeha_about_top();	
	
	/*** Menu Backgound ***/
	
	function maleeha_menu_bg(){
	jQuery(window).on('scroll',function(){
		var WinOffset		= jQuery(window).scrollTop();
		var topBar			= jQuery('.maleeha_topbar');
		if(WinOffset >= 500){
			topBar.addClass('animate');
		}else{
			topBar.removeClass('animate');
		}
	});
}
maleeha_menu_bg();
	
	/*** Mobile Menu ***/
	
	function maleeha_mobile_menu(){
		
	var trigger			= jQuery('.maleeha_topbar .trigger');
	var triggerMenu		= jQuery('.maleeha_topbar .trigger .menu');
	var triggerClose	= jQuery('.maleeha_topbar .trigger .close');
	var dropdown		= jQuery('.maleeha_topbar .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('opened');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('opened');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}
maleeha_mobile_menu();	
	
	/*** Anchor ***/
	
	function maleeha_anchor(){
	
	jQuery('.maleeha_topbar .menu_list ul li a,.maleeha_topbar .dropdown .main ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-165
			}, 1000);
		}
		return false;
	});
}
maleeha_anchor();
	
	/*** Appear ***/
	
	function maleeha_appear(){
		
	var div		= jQuery('.maleeha_appear');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"60%"
		});
		
	});
	
}
maleeha_appear();
	
	function maleeha_popup(){
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
	}
	maleeha_popup();
	
	/*** Ripple ***/
	
	function maleeha_ripple(){
		
		jQuery('#ripple').ripples({
				resolution: 500,
				dropRadius: 20,
				perturbance: 0.04
			});
	}
	maleeha_ripple();
	
	/*** Video ***/
	
	$(".youtube-bg").mb_YTPlayer();
	
	/*** Glitch ***/
	
	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});
	
	/*** Hero Effect ***/
	
	function maleeha_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var currentScroll		= window.pageYOffset;
		jQuery(".maleeha_hero_wrap,.glitch").css({'transform': 'scale('+(100 - currentScroll/100)/99+')','opacity' : (1 - (currentScroll/20) / 15)});
	});
	
}
	
	function maleeha_animate_text(){
		
	var animateSpan			= jQuery('.arlo_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["freelancer", "blogger", "web developer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}
maleeha_animate_text();
	 
	 
	 
	 
	 
	 
	/*** Preloader ***/
	
	function maleeha_preloader(){
		
	var mainPreloader	 = $(".maleeha_loader-wrapper .loader");
	var WinWidth 		 = $(window).width();
    var WinHeight		 = $(window).height();
    var zero = 0;

    mainPreloader.css({
        top: WinHeight / 2 - 2.5,
        left: WinWidth / 2 - 200
    });

    do {
        mainPreloader.animate({
            width: zero
        }, 10);
        zero += 3;
    } while (zero <= 400);
    if (zero === 402) {
        mainPreloader.animate({
            left: 0,
            width: '100%'
        });
        mainPreloader.animate({
            top: '0',
            height: '100vh'
        });
    }
		
    setTimeout(function() {
        $(".maleeha_loader-wrapper").fadeOut('fast');
        (mainPreloader).fadeOut('fast');
    }, 4500);
}
	jQuery(window).on('scroll',function(){
		maleeha_hero_effect();
	});

	jQuery(window).on('resize',function(){
		maleeha_hero_height();
	});

	jQuery(window).load('body', function(){
		setTimeout(function(){maleeha_preloader();},1000);
	});
	
	// MENU
	
	function maleeha_top_menu(){
		
		var t1			= new TimelineMax({paused:true});

		t1.to(".maleeha_topbar .trigger_main .one", 0.5,{
			y:6,
			rotation:45,
			ease:Expo.easeinOut
		});
		t1.to(".maleeha_topbar .trigger_main .two", 0.5,{
			y:- 6,
			rotation:-45,
			ease:Expo.easeinOut,
			delay:-0.5
		});	
		t1.to(".beker_tm_menu",0.5,{
			right:"-40px",
			ease:Expo.easeinOut,
			delay:-0.5
		});
		t1.staggerFrom(".maleeha_topbar .menu_list ul li", 0.4, {x:25, opacity:0, ease:Expo.easeinOut},0.1);
		t1.reverse();

		jQuery('.maleeha_topbar .trigger_main').on('click',function(){
			t1.reversed(!t1.reversed());
			return false;
		});	
	}
	maleeha_top_menu();
	
	
	
	
	
	
	
	
	
	
    /* -----------------------------------------------
                   Masonry Function
       ----------------------------------------------- */
    var container_masonry = $(".container-masonry");
    container_masonry.imagesLoaded(function() {
        container_masonry.isotope({
            itemSelector: '.nf-item',
            transitionDuration: '1s',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    });


    /* -----------------------------------------------
                   Masonry filter Function
       ----------------------------------------------- */
    /*Masonry filter Function*/
    var container_filter = $(".container-filter");
    container_filter.on("click", ".categories", function() {
        var a = $(this).attr("data-filter");
        container_masonry.isotope({
            filter: a
        });

    });


    /* -----------------------------------------------
                      brand-slider
       ----------------------------------------------- */
    if ($('.brand-slider').length) {
        $('.brand-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }




    /* -----------------------------------------------
                      Counter
       ----------------------------------------------- */
    $('.counter-item').appear(function() {
        $('.counter-number').countTo();
    });
});



  /* -----------------------------------------------
                      LightBox / Fancybox
       ----------------------------------------------- */

    /*MAGNIFIC POPUP JS*/

    $('.video-play').magnificPopup({    type: 'iframe'
    });
    var magnifPopup = function() {    $('.work-popup').magnificPopup({        type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {            enabled: true
            },
            zoom: {            enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {                // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    // 3 LightBox / Fancybox
    if ($('.lightbox-image').length) {    $('.lightbox-image').fancybox({        openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {            media: {}
            }
        });
    }
	
	
 

/*========================================================== 
         TESTIMONIALS SLIDER
========================================================== */
if ($('.testimonials-slider').length) {
    $('.testimonials-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 2,
        margin: 50,
        autoplay: true,
        center: true,
        smartSpeed: 700,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            992: {
                items: 2,
                margin: 50
            }
        }
    });
}



/*Team*/


$(function() {

    'use strict';

    $('.pCard_add').click(function() {
        $(this).parent().parent().toggleClass('pCard_on');
        $('.pCard_add i').toggleClass('fa-minus');
    });

    $('.pCard_add1').click(function() {
        $(this).parent().parent().toggleClass('pCard_on');
        $('.pCard_add1 i').toggleClass('fa-minus');
    });

    $('.pCard_add2').click(function() {
        $(this).parent().parent().toggleClass('pCard_on');
        $('.pCard_add2 i').toggleClass('fa-minus');
    });

});
 

// Single Item Carousel 
if ($('.single-item-carousel').length) {
    $('.single-item-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
        }
    });
}



/*Smooth Scroll*/
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
   