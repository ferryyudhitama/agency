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
                    items:1.1
                },
                
                600:{
                    items: 2.4,
                }
            }
        });

        var owlHeadline= $('.header__headline');

        owlHeadline.owlCarousel({
            items: 3,
            loop:true,
            margin:50,
            touchDrag:true,
            mouseDrag: true,
            responsive:{
                0:{
                    items:1.2,
                    margin:10,
                },
                
                993:{
                    items: 3,
                     margin:50,
                }

            }
        });

        $(window).on('resize', function(){
            setPadding();
        });

        $('.discover__nav__left').click(function(e){
            e.preventDefault();
            owlDiscover.trigger('prev.owl.carousel');
        })

        $('.discover__nav__right').click(function(e){
            e.preventDefault();
             owlDiscover.trigger('next.owl.carousel');
        })


        //accordion
        const headers = document.querySelectorAll(".accordion-header");
            headers.forEach(header => {
            header.addEventListener("click", () => {
                const item = header.parentElement;
                item.classList.toggle("active");

                // Optional: close others
                document.querySelectorAll(".accordion-item").forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
                });
            });
        });

        //hamburger
        $('#nav-icon3').click(function(e){
            e.preventDefault();
            $('.header__menu').toggleClass('active');
            $(this).toggleClass('open');
        })
});