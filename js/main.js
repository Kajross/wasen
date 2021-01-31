/*----------------------------------------------

Main Scripts

Theme    : CodeCity
Version  : 1.0.0
Author   : Kajross
Support  : Kajross

----------------------------------------------*/

/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.1.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/* jQuery(function ($) {
    var testimonialsSlider = new Swiper('.testimonials__container', {
        wrapperClass: "testimonials__wrapper",
        slideClass: "testimonials__item",
        direction: 'vertical',
        loop: false,
        pagination: {
            el: '.testimonials__pagination',
            type: 'progressbar',
        },
        scrollbar: {
            el: '.testimonials__scroll',
            draggable: true,
            dragClass: 'testimonials__drag-scroll'
        },
        autoHeight: true,
        simulateTouch: true,
        keyboard: {
            enabled: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 30,

        autoplay: {
            delay: 7000,
        },

        mousewheel: true,
        mouseWheel: {
            sensivity: 1,
            eventsTarget: ".testimonials",
        },
    });
}); */
/*------------------------------------------------------------------

Parallax

------------------------------------------------------------------*/
$('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 50,
});
/*------------------------------------------------------------------

Popup

------------------------------------------------------------------*/
$('.works__link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
/*------------------------------------------------------------------

TypeJs

------------------------------------------------------------------*/
jQuery(function ($) {
    var options = {
        strings: [" Wade Warren.", "Web developer.", "UI/UX designer.",
            "Photographer.",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        startDelay: 400,
    }
    var typed = new Typed("#typing", options);
});
/*------------------------------------------------------------------

Contact Form

------------------------------------------------------------------*/
jQuery(function ($) {
    "use strict";

    $('.input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() !== "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        });
    });
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    $('.validate-form').on('submit', function () {
        var check = true;
        if ($(name).val().trim() === '') {
            showValidate(name);
            check = false;
        }
        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
            showValidate(email);
            check = false;
        }
        if ($(message).val().trim() === '') {
            showValidate(message);
            check = false;
        }
        return check;
    });
    $('.validate-form .input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
});

/*------------------------------------------------------------------

Slide

------------------------------------------------------------------*/

jQuery(window).scroll(function () {
    "use strict";

    var $sections = $('.section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 300;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('.menu__list li').removeClass('menu__item--active');
            $('a[href="#' + id + '"]').parent().addClass('menu__item--active');
        }
    })
});


/*------------------------------------------------------------------

Preloader

------------------------------------------------------------------*/

$(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
    }, 500);
});

/*------------------------------------------------------------------

Team Carousel

------------------------------------------------------------------*/

$('.team-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    lazyLoad: false,
    autoplay: false,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
/*------------------------------------------------------------------

Masonry

------------------------------------------------------------------*/

var $grid = $('.works').imagesLoaded(function () {
    $grid.masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.works__item',
        // use element for option
        columnWidth: '.works__item',
        gutter: 30,
        percentPosition: true,
    })
})
/*------------------------------------------------------------------

Numbers

------------------------------------------------------------------*/

$('.numbers__count').counterUp({
    delay: 10,
    time: 1000,
    offset: 100,
});

/*------------------------------------------------------------------

Progress Bar

------------------------------------------------------------------*/

$(window).on('scroll', function () {
    $(".skills__progress span").each(function () {
        var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
        var bottom_of_window =
            $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr('data-value');
        if (bottom_of_window >= bottom_of_object) {
            $(this).css({
                width: myVal
            });
        }
    });
});

/* $('.skills__count').counterUp({
    delay: 10,
    time: 1100,
    offset: 100,
}); */

/*------------------------------------------------------------------

Navbar

------------------------------------------------------------------*/
$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 60 ? $('nav').addClass('nav--shadow') : $('nav').removeClass('nav--shadow');
    });

    //Click Logo To Scroll To Top
    $('.logo').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 800);
        e.preventDefault();
    });

    //Toggle Menu
    $('.menu__toggle').on('click', () => {
        $('.menu__toggle').toggleClass('closeMenu');
        $('.menu__list').toggleClass('showMenu');

        $('li').on('click', () => {
            $('.menu__list').removeClass('showMenu');
            $('.menu__toggle').removeClass('closeMenu');
        });
    });

});
/*------------------------------------------------------------------

Back To Top

------------------------------------------------------------------*/

var btn = $('.back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
/*------------------------------------------------------------------

Wow js

------------------------------------------------------------------*/
jQuery(function ($) {
    "use strict";

    function bodyScrollAnimation() {
        if ($(window).width() > 768) {
            new WOW({
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,
                mobile: false,
                duration: 1000,
                live: true,
                scrollContainer: null
            }).init()
        }
    }
    bodyScrollAnimation();
});
/*------------------------------------------------------------------

Mouse button

------------------------------------------------------------------*/
jQuery(function ($) {
    "use strict";

    var btn = $('.mouse-btn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            btn.addClass('hidden');
        } else {
            btn.removeClass('hidden');
        }
    });
});
/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation 
4. Slides 
5. Particles
6. Progress Bar
7. Shuffle
8. Sign and Register Form
9. Simple Form
10. Recaptcha
11. Cookie Notice

----------------------------------------------*/

/*----------------------------------------------
2. Responsive Menu
----------------------------------------------
jQuery(function ($) {
    'use strict';

    function navResponsive() {
        let navbar = $('.navbar .items');
        let menu = $('#menu .items');
        menu.html('');
        navbar.clone().appendTo(menu);
        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }
    navResponsive();
    $(window).on('resize', function () {
        navResponsive();
    })
    $('.menu .dropdown-menu').each(function () {
        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-' + children);
    })
    $('.menu .nav-item.dropdown').each(function () {
        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })
    $(document).on('click', '#menu .nav-item .nav-link', function (e) {
        if ($(this).hasClass('prevent')) {
            e.preventDefault();
        }
        var nav_link = $(this);
        nav_link.next().toggleClass('show');
        if (nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
})
/*----------------------------------------------
3. Navigation
----------------------------------------------
jQuery(function ($) {
    'use strict';
    var position = $(window).scrollTop();
    var navbar = $('.navbar.sub');
    var toTop = $('#scroll-to-top');
    $(document).ready(function () {
        if (position > 0) {
            navbar.addClass('navbar-sticky');
        }
        toTop.hide();
    })
    $(window).scroll(function () {
        navbar.removeAttr('data-aos');
        navbar.removeAttr('data-aos-delay');
        var scroll = $(window).scrollTop();
        if (!navbar.hasClass('relative')) {
            // Down
            if (scroll > position) {
                navbar.addClass('navbar-sticky');
                if (navbar.hasClass('navbar-fixed') || window.innerWidth <= 767) {
                    navbar.removeClass('hidden').addClass('visible');
                } else {
                    if ($(window).scrollTop() >= window.innerHeight) {
                        navbar.removeClass('visible').addClass('hidden');
                    }
                }
                toTop.fadeOut('fast');
                // Up
            } else {
                navbar.removeClass('hidden').addClass('visible');
                // Top
                if ($(window).scrollTop() <= 100) {
                    navbar.removeClass('navbar-sticky');
                } else {
                    if (!navbar.hasClass('navbar-no-fixed')) {
                        navbar.addClass('visible');
                    }
                }
                if (position >= window.innerHeight && window.innerWidth >= 767) {
                    toTop.fadeIn('fast');
                } else {
                    toTop.fadeOut('fast');
                }
            }
            position = scroll;
        }
    })
    $('.nav-link').each(function () {
        let href = $(this).attr('href');
        if (href.length > 1 && href.indexOf('#') != -1) {
            $(this).addClass('smooth-anchor');
        }
    })
    $(document).on('click', '.smooth-anchor', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        if (href.length > 1 && href.indexOf('#') != -1) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        }
    })
    $('.dropdown-menu').each(function () {
        let dropdown = $(this);
        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('active');
        }, function () {
            dropdown.parent().find('.nav-link').first().removeClass('active');
        })
    })
    let navbar_holder = $('.navbar-holder');
    let navbar_height = $('.navbar-expand.sub').outerHeight();
    if (navbar_holder.length > 0) {
        $('.navbar-holder').css('min-height', navbar_height);
    }
})

/*----------------------------------------------
7. Shuffle
----------------------------------------------
jQuery(function ($) {
    'use strict';
    $('.filter-section').each(function (index) {
        var count = index + 1;
        $(this).find('.filter-items').removeClass('filter-items').addClass('filter-items-' + count);
        $(this).find('.filter-item').removeClass('filter-item').addClass('filter-item-' + count);
        $(this).find('.filter-sizer').removeClass('filter-sizer').addClass('filter-sizer-' + count);
        $(this).find('.btn-filter-item').removeClass('btn-filter-item').addClass('btn-filter-item-' + count);
        var Shuffle = window.Shuffle;
        var Filter = new Shuffle(document.querySelector('.filter-items-' + count), {
            itemSelector: '.filter-item-' + count,
            sizer: '.filter-sizer-' + count,
            buffer: 1,
        })
        $('.btn-filter-item-' + count).on('change', function (e) {
            var input = e.currentTarget;
            if (input.checked) {
                Filter.filter(input.value);
            }
        })
    })
})
/*----------------------------------------------
8. Sign and Register Form
----------------------------------------------
jQuery(function ($) {
    'use strict';
    $(document).on('click', 'a[data-target="#register"]', function () {
        $('#sign').modal('hide');
    })
    $(document).on('click', 'a[data-target="#sign"]', function () {
        $('#register').modal('hide');
    })
})
/*----------------------------------------------
9. Simple Form
----------------------------------------------
jQuery(function ($) {
    'use strict';

    function sendForm(ID) {
        var form = $(ID);
        var input = $(ID + ' .form-control')
        var btn = $(ID + ' .btn:first-child');
        var alert = $(ID + ' .form-alert');
        alert.hide();
        $(document).on('click', ID + ' .btn:first-child', function () {
            $(this).addClass('effect-motion-bg');
            form.submit();
        })
        form.submit(function (e) {
            e.preventDefault();
            if ($('input[name="reCAPTCHA"]').length) {
                let reCAPTCHA = $('input[name="reCAPTCHA"]');
                grecaptcha.ready(function () {
                    grecaptcha.execute(reCAPTCHA.data('key'), {
                        action: "create_comment"
                    }).then(function (token) {
                        reCAPTCHA.val(token);
                    })
                })
            }
            var url = form.attr('action');
            $.ajax({
                type: 'POST',
                url: url,
                data: form.serialize(),
                success: function (response) {
                    try {
                        JSON.parse(response);
                        var obj = JSON.parse(response);
                        if (obj.status == 'success') {
                            setTimeout(function () {
                                btn.removeClass('effect-motion-bg');
                                input.val('').removeClass('invalid').removeClass('valid');
                                alert.text(obj.info).removeClass('invalid').addClass('valid').fadeIn();
                            }, 1200);
                        } else if (obj.status == 'invalid') {
                            setTimeout(function () {
                                btn.removeClass('effect-motion-bg');
                                alert.text(obj.info).removeClass('valid').addClass('invalid').fadeIn();
                            }, 1200);
                            input.each(function () {
                                let input_name = $(this).attr('name');
                                if (obj.fields[input_name] === true) {
                                    $(ID + ' .field-' + input_name).removeClass('valid').addClass('invalid');
                                } else {
                                    $(ID + ' .field-' + input_name).removeClass('invalid').addClass('valid');
                                }
                            })
                        } else {
                            btn.removeClass('effect-motion-bg');
                            input.val('').removeClass('invalid').removeClass('valid');
                            alert.text(obj.info).removeClass('valid').addClass('invalid').fadeIn();
                        }
                    } catch (e) {
                        btn.removeClass('effect-motion-bg');
                        input.val('').removeClass('invalid').removeClass('valid');
                        alert.text('Sorry. We were unable to send your message.').removeClass('valid').addClass('invalid').fadeIn();
                    }
                }
            })
        })
    }
    sendForm('#nexgen-simple-form');
    sendForm('#nexgen-subscribe');
})
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/

/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/



// Custom JavaScript
/* $(document).ready(function () {
    "use strict";

    // sticky header
    function headerSticky() {
        var windowPos = $(window).scrollTop();
        if (windowPos > 20) {
            $('.fixed-top').addClass("on-scroll");
            $('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
            $('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
        } else {
            $('.fixed-top').removeClass("on-scroll");
            $('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
            $('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
        }
    }
    headerSticky();
    $(window).scroll(headerSticky);

    // main menu
    $('.main-navigation .sf-menu').superfish({
        delay: 100,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 300,
    });

    // menudropdown auto align      
    var wapoMainWindowWidth = $(window).width();
    $('.sf-menu ul li').mouseover(function () {
        // checks if third level menu exist         
        var subMenuExist = $(this).find('.sub-menu').length;
        if (subMenuExist > 0) {
            var subMenuWidth = $(this).find('.sub-menu').width();
            var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

            // if sub menu is off screen, give new position
            if ((subMenuOffset + subMenuWidth) > wapoMainWindowWidth) {
                var newSubMenuPosition = subMenuWidth;
                $(this).find('.sub-menu').css({
                    left: -newSubMenuPosition,
                    top: '0',
                });
            }
        }
    }); // menu ends

    // scrollspy
    $('body').scrollspy({
        offset: 120,
        target: '.dtr-scrollspy'
    });

    // nav scroll	
    if ($('#dtr-header-global').length) {
        var navoffset = $('#dtr-header-global').height();
        $('.dtr-nav a[href^="#"], .dtr-scroll-link').on("click", function (e) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - navoffset - 37
            }, "slow", "easeInSine");
        });
    } else {
        $('.dtr-scroll-link').on("click", function (e) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, "slow", "easeInSine");
        });
    }

    // responsive header nav scroll
    var mnavoffset = $('.dtr-responsive-header').height();
    var scroll = new SmoothScroll('.dtr-responsive-header-menu a', {
        speed: 500,
        speedAsDuration: true,
        offset: mnavoffset + 15
    });

    // responsive menu
    $('.main-navigation .dtr-nav').slicknav({
        label: "",
        prependTo: '.dtr-responsive-header-menu',
        closedSymbol: '',
        openedSymbol: '',
        allowParentLinks: "true",
        menuButton: '#dtr-menu-button',
        closeOnClick: true
    });
    // responsive scrollspy
    $('.slicknav_nav').addClass("dtr-scrollspy")

    // responsive menu button
    $("#dtr-menu-button").on("click", function (e) {
        $(".slicknav_nav").slideToggle();
    });

    // responsive menu hamburger
    var $hamburger = $("#dtr-menu-button");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
    });

    // sectionAnchor
    function sectionAnchor() {
        var navoffset = $('#dtr-header-global').height();
        var hash = window.location.hash;
        if (hash != '') {
            setTimeout(function () {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - navoffset - 37
                }, 800, 'easeInSine');
                history.pushState('', document.title, window.location.pathname);
            }, 500);
        }
    }
    sectionAnchor();

    // responsiveAnchor 
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        function responsiveAnchor() {
            var mnavoffset = $('.dtr-responsive-header').height();
            var hash = window.location.hash;
            if (hash != '') {
                setTimeout(function () {
                    $('html, body').stop().animate({
                        scrollTop: $(hash).offset().top - mnavoffset - 15
                    }, 800, 'easeInSine');
                    history.pushState('', document.title, window.location.pathname);
                }, 500);
            }
        }
        responsiveAnchor();
    }

    // testimonial
    $('.dtr-testimonial-style-center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 1000
    });

    // testimonial
    $('.dtr-testimonial-style-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 1000
    });

    // img slider 3col
    $('.dtr-img-slider-3col').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, ]
    });

    // img slider 2col
    $('.dtr-img-slider-2col').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, ]
    });

    // img slider 1col
    $('.dtr-img-slider-1col').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, ]
    });

    // wow animations
    if ($(window).outerWidth() >= 767) {
        new WOW().init({
            mobile: false,
        });
    }

    // parallax
    if ($(window).outerWidth() >= 767) {
        $(".parallax").parallaxie({
            speed: 0.60,
            size: 'auto',
        });
        $(".parallax.parallax-slow").parallaxie({
            speed: 0.30,
        });
    }

    // video popup
    $('.dtr-video-popup').venobox();

    // Popup video
    $(".popup-video").magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 150,
        preloader: false,
        fixedContentPos: false
    });

    // Popup image
    $('.popup-image').magnificPopup({
        type: 'image',
    });

    // Popup gallery
    $('.popup-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 150,
        gallery: {
            enabled: true
        },
    });

    //Contact form
    $(function () {
        var v = $("#contactform").validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    target: "#result",
                    clearForm: true
                });
            }
        });
    });
    //To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
    $('#contactform #message').val('');

    //Quote form
    $(function () {
        var v = $("#quoteform").validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    target: "#quote-result",
                    clearForm: true
                });
            }
        });
    });
    //To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below) 
    $('#quoteform #message').val('');

}); // document ready

// on load
$(window).on('load', function () {

    // preloader
    $('.dtr-preloader').delay(400).fadeOut(500);

    // portfolio		
    $('.dtr-portfolio-grid').imagesLoaded(function () {
        $('.dtr-portfolio-grid').isotope({
            itemSelector: '.dtr-portfolio-item',
            masonry: {},
        });
    });
    $('.dtr-filter-nav a').on('click', function () {
        $('.dtr-filter-nav a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.dtr-portfolio-grid').isotope({
            filter: selector
        });
        return false;
    });

}); // close on load  */