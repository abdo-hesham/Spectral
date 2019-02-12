/* global $, window, document */
$(document).ready(function () {
   
    "use strict";

            // To Make background of navbar black
    
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });
    
            // To Hide nav:after
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 40) {
            $('nav.ad').removeClass('ad').addClass('re');
        } else {
            $('nav.re').removeClass('re').addClass('ad');
        }
    });
    
    // Manaul Slider Effects
    $('.navigation li').click(function () {
        $('.navigation li').removeClass('selected');
        $(this).addClass('selected');
    
        
        var index = $('.navigation li').index($(this));
        $('.panel').css('z-index', 0);
        $('.panel').eq(index).css('z-index', 2);
    });
        
    // Count Up
    
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
  
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

            {

                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
      //alert('finished');
                }

            });
  
    });
    
    // Testimonials Slider
    
    $('.navi li').click(function () {
        $('.navi li').removeClass('selected');
        $(this).addClass('selected');
    
        
        var index = $('.navi li').index($(this));
        $('.customers').css('display', 'none');
        $('.customers').eq(index).fadeIn(2000);
        
    });
    
   
    
});