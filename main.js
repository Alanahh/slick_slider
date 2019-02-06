
$( "div.wrap" ).scrollTop( 300 );

    $('.my-third-class').slick({
        centerMode: true,
        dots: true,
        centerPadding: '60px',
        slidesToShow: 5,
        asNavFor: ".my-first-class"           
    });

    $('.my-first-class').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        asNavFor: ".my-second-class"   
      });
      
      $('.my-second-class').slick({
        centerMode: true,
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: ".my-third-class"
      });
      
