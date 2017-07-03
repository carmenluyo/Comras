jQuery(function() {
    var $ = jQuery;

    $(document).ready(function() {
        $('#fullpage').fullpage({
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 700,
            responsiveWidth: 1025,
            responsiveHeight: 500,
            afterLoad:function(anchorLink, index){
                if(index == 5){
                     slider.refresh();
                }
            }
        });
    });

    $(document).on('click', '.goto', function() {
        $.fn.fullpage.moveSectionDown();
    });

    // GO TOP

    $(document).on('click', '.scrollup', function() {
        $.fn.fullpage.moveTo(1);
    });

    // JS for  NAVIGATION  
    $("#snMobile, #snDekstop").click(function() {
        $(this).toggleClass("opened");
        $('header').toggleClass("navOpened");
    });
    // FEATURED PROPERTIES
        var slider2 = $('#content-slider').lightSlider({
            auto: false,
            item: 4,
            loop: true,
            pager: true,
            controls: false,
            speed: 600,
            pause: 3000,
            keyPress: true,
            mode: 'slide',
            responsive: [{
                breakpoint: 1080,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 10,
                }
            }, {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideM2ve: 1,
                    slideMargin: 6,
                }
            }, {
                breakpoint: 481,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }]

        });
        $(document).on('click',"#goToPrevSlide", function() {
            slider2.goToPrevSlide();
        });
        $(document).on('click',"#goToNextSlide", function() {
            slider2.goToNextSlide();
        });


     // new
    var slider = $('#content-new').lightSlider({
        auto: false,
        item: 2,
        loop: true,
        pager: true,
        controls: false,
        speed: 600,
        pause: 3000,
        keyPress: true,
        mode: 'slide',
        responsive: [{
            breakpoint: 1080,
            settings: {
                item: 2,
                slideMove: 1,
                slideMargin: 10,
            }
        }, {
            breakpoint: 800,
            settings: {
                item: 2,
                slideM2ve: 1,
                slideMargin: 6,
            }
        }, {
            breakpoint: 481,
            settings: {
                item: 1,
                slideMove: 1
            }
        }]

        });
    
    $('#goToPrevSlideNew').on('click', function() {
        slider.goToPrevSlide();
    });
    $('#goToNextSlideNew').on('click', function() {
        slider.goToNextSlide();
    });

    var d = jQuery(window).width();
    if (d <769) {
        var slider4 = $('#newCons').lightSlider({
        auto: false,
        item: 1,
        loop: true,
        pager: true,
        controls: false,
        speed: 600,
        pause: 3000,
        keyPress: true,
        mode: 'slide',
        responsive: [{
        breakpoint: 800,
        settings: {
            item: 1,
            slideMove: 1,
            slideMargin: 6,
        }
        }, {
        breakpoint: 481,
        settings: {
            item: 1,
            slideMove: 1
        }
        }]
    });

        $('#goToPrevSlidenewCons').on('click', function() {
            slider4.goToPrevSlide();
        });
        $('#goToNextSlidenewCons').on('click', function() {
            slider4.goToNextSlide();
        });
    }



    // Footer Accordion

    $(function() {
        $("#accordion").accordion({
            heightStyle: "content"
        });
    });


});
