(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);


$(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
    event.preventDefault();
    // create accordion variables
    var accordion = $(this);
    var accordionContent = accordion.next('.accordion-content');
    var accordionToggleIcon = $(this).children('.toggle-icon');
    // toggle accordion link open class
    accordion.toggleClass("open");
    // toggle accordion content
    accordionContent.slideToggle(250);
    // change plus/minus icon
    if (accordion.hasClass("open")) {
    accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
    } else {
    accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
    }
    });
    });
