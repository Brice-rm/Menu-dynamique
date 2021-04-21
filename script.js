// FILLTER //
$(function () {
    $(".filter").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      const value = $(this).attr("data-filter");
      // console.log(value)
      if (value === "all") {
        $(".filter-el").fadeIn("slow")
      } else {
        $(".filter-el")
          .not("." + value)
          .fadeOut("slow");
        $(".filter-el")
          .filter("." + value)
          .fadeIn("slow");
      }
    });
    
  });
  

// SHOW/HIDE //

$(".accordion-toggle").click (function(){
    // Close all open windows
    $(".accordion-content").stop().slideUp(800); 
    // Toggle this window open/close
    $(this).next(".accordion-content").stop().slideToggle(500);
    // //hitter test// 
    // $(".hitter").show()
  });


  //close open windows on click filtering elements
  $(".filter").click (function(){
    // Close all open windows
    $(".accordion-content").stop().slideUp(500); 
  });


















// OLD CODE //

// (function () {

//     'use strict';


    // var $projects = $('.projects');


    // $projects.isotope({
    //     // itemSelector: '.item',
    //     layoutMode: 'fitRows',
    //     transitionDuration: "1s",
    //     animationOptions: {
    //         duration: 6500,
    //         queue: false
    //     },
    // });



//     $('ul.filters > li').on('click', function (e) {

//         e.preventDefault();

//         var filter = $(this).attr('data-filter');

//         $('ul.filters > li').removeClass('active');
//         $(this).addClass('active');

//         $projects.isotope({ filter: filter });

//     });

    // $('.card').mouseenter(function(){

    //     $(this).find('.card-overlay').css({'top': '-100%'});
    //     $(this).find('.card-hover').css({'top':'0'});

    // }).mouseleave(function(){

    //     $(this).find('.card-overlay').css({'top': '0'});
    //     $(this).find('.card-hover').css({'top':'100%'});

    // });

// })(jQuery);


// $(document).ready(function () {
//     $('.accordion-toggle').on('click', function(event){
//     event.preventDefault();
//     // create accordion variables
//     var accordion = $(this);
//     var accordionContent = accordion.next('.accordion-content');
//     var accordionToggleIcon = $(this).children('.toggle-icon');
//     // toggle accordion link open class
//     accordion.toggleClass("open");
//     // toggle accordion content
//     accordionContent.slideToggle(400);
//     // change plus/minus icon
//     if (accordion.hasClass("open")) {
//     accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
//     } else {
//     accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
//     }
//     });
//     });




