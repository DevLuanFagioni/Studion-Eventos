$(document).ready(function(){

    $('#banners').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    
    $('.depoiments-list').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        prevArrow: '<button type="button" class=" slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class=" slick-next"><i class="fa fa-angle-right"></i></button>'

    });

    $(".events-item").mouseenter(function() {
        $(".events-item .events-description").stop().slideUp("slow");
        $(this).find(".events-description").stop().slideDown("slow");
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });
});

