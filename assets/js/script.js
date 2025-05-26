$( document ).ready(function() {
       
        function setPadding(){
            var positionLeft = $('.dicover__header').offset().left;
            $('.discover_slider').css('padding-left', positionLeft+'px');
        }

        setPadding();


       var owlDiscover = $('.discover_slider');

        owlDiscover.owlCarousel({
            // center: true,
            items: 2.4,
            loop:false,
            margin:20,
            loop:true,
            // autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                
                600:{
                    items: 2.3,
                }
            }
        });

        $(window).on('resize', function(){
            setPadding();
        });
});