	//=== Switcher panal slide function	=====================//

	jQuery(window).load(function() {
	    jQuery('.styleswitcher').animate({
	        'left': '-240px'
	    });
	    jQuery('.switch-btn').addClass('closed');
	});

	jQuery(document).ready(function() {
	    jQuery('.switch-btn').on('click', function() {
	        if (jQuery(this).hasClass('open')) {
	            jQuery(this).addClass('closed');
	            jQuery(this).removeClass('open');
	            jQuery('.styleswitcher').animate({
	                'left': '-240px'
	            });
	        } else {
	            if (jQuery(this).hasClass('closed')) {
	                jQuery(this).addClass('open');
	                jQuery(this).removeClass('closed');
	                jQuery('.styleswitcher').animate({
	                    'left': '0px'
	                });
	            }
	        }
	    });
	});

	//=== Switcher panal slide function END	=====================//


	//=== Color css change function	=====================//

	jQuery(document).ready(function() {

	    // Color changer
	    jQuery(".skin-1").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-1.css");
	        return false;
	    });

	    jQuery(".skin-2").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-2.css");
	        return false;
	    });

	    jQuery(".skin-3").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-3.css");
	        return false;
	    });

	    jQuery(".skin-4").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-4.css");
	        return false;
	    });

	    jQuery(".skin-5").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-5.css");
	        return false;
	    });

	    jQuery(".skin-6").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-6.css");
	        return false;
	    });

	    jQuery(".skin-7").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-7.css");
	        return false;
	    });

	    jQuery(".skin-8").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-8.css");
	        return false;
	    });

	    jQuery(".skin-9").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-9.css");
	        return false;
	    });

	    jQuery(".skin-10").on('click', function() {
	        jQuery(".skin").attr("href", "css/skin/skin-10.css");
	        return false;
	    });

	});


	//=== Background image change function	=====================//
	jQuery(document).ready(function() {

	    jQuery('.background-switcher li img').on('click', function() {
	        var imgbg = jQuery(this).attr('rel');

	        //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);

	        jQuery('#bg').css({
	            backgroundImage: "url(" + imgbg + ")"
	        });
	    });

	});



	//=== Background pattern change function	=====================//
	jQuery(document).ready(function() {

	    jQuery('.pattern-switcher li img').on('click', function() {
	        var imgbg = jQuery(this).attr('rel');

	        //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);

	        jQuery('#bg').css({
	            backgroundImage: "url(" + imgbg + ")"
	        });
	        jQuery("#bg").css("background-size", "auto")

	    });

	});


	//=== Layout boxed & fullscreen change function	END=====================//
	jQuery(document).ready(function() {
	    jQuery('.layout-view li ').on('click', function() {
	        jQuery('.layout-view li ').removeClass('active');
	        jQuery(this).addClass('active');
	    });

	    jQuery('.wide-layout').on('click', function() {
	        jQuery("body").addClass('wide-layout')
	        jQuery("body").removeClass('boxed')
	    });

	    jQuery('.boxed').on('click', function() {
	        jQuery("body").addClass('boxed')
	        jQuery("body").removeClass('wide-layout')
	    });

	});

	//=== Nav light & dark change function	END=====================//
	jQuery(document).ready(function() {

	    jQuery('.nav-view li ').on('click', function() {
	        jQuery('.nav-view li ').removeClass('active');
	        jQuery(this).addClass('active');
	    });

	    jQuery('.nav-light').on('click', function() {
	        jQuery(".header-nav").addClass('nav-light')
	        jQuery(".header-nav").removeClass('nav-dark')
	    });

	    jQuery('.nav-dark').on('click', function() {
	        jQuery(".header-nav").addClass('nav-dark')
	        jQuery(".header-nav").removeClass('nav-light')
	    });

	});


	//=== Nav light & dark change function	END=====================//
	jQuery(document).ready(function() {

	    jQuery('.nav-width li ').on('click', function() {
	        jQuery('.nav-width li ').removeClass('active');
	        jQuery(this).addClass('active');
	    });

	    jQuery('.nav-wide').on('click', function() {
	        jQuery(".site-header").addClass('nav-wide')
	        jQuery(".site-header").removeClass('nav-boxed')
	    });

	    jQuery('.nav-boxed').on('click', function() {
	        jQuery(".site-header").addClass('nav-boxed')
	        jQuery(".site-header").removeClass('nav-wide')
	    });

	});



	//=== Nav light & dark change function	END=====================//
	jQuery(document).ready(function() {

	    jQuery('.header-view li ').on('click', function() {
	        jQuery('.header-view li ').removeClass('active');
	        jQuery(this).addClass('active');
	    });

	    jQuery('.header-fixed').on('click', function() {
	        jQuery(".main-bar-wraper").addClass('sticky-header')
	        jQuery(".main-bar-wraper").removeClass('sticky-no')
	    });

	    jQuery('.header-static').on('click', function() {
	        jQuery(".main-bar-wraper").addClass('sticky-no')
	        jQuery(".main-bar-wraper").removeClass('sticky-header')
	    });

	});